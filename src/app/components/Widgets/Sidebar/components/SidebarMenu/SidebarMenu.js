import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, FormGroup, FormControl, InputLabel, Select, MenuItem, Wrapper } from '../../../../';
import { StorageService } from '../../../../../services';
import { DEFAULT_THEME, FONT_FAMILY } from '../../../../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '7px 24px 0',
    },
    title: {
        fontFamily: FONT_FAMILY.tertiary,
        color: theme.palette.text.secondary,
        fontSize: 12,
        fontWeight: 400,
        marginBottom: 24,
    },
}), 'SidebarMenu');

const THEME_MODE_OPTIONS = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
    { label: 'Auto', value: 'auto' },
];

function SidebarMenu() {
    const classes = useStyles();
    const [userTheme, setUserTheme] = useState(DEFAULT_THEME);

    useEffect(() => {
        const userThemeSub = StorageService.userTheme.subscribe(value => setUserTheme(value));

        return () => {
            userThemeSub.unsubscribe();
        };
    }, []);

    const onThemeChange = event => {
        const value = event.target.value;

        setUserTheme(value);
        StorageService.setUserTheme(value);
    };

    return (
        <Wrapper>
            <div
                className={classes.root}
            >
                <Typography
                    variant='body1'
                    className={classes.title}
                >
                    Settings
                </Typography>

                {/* Menu */}
                <FormGroup>
                    <FormControl
                        variant='outlined'
                        className={classes.formControl}
                    >
                        <InputLabel>
                            Theme *
                        </InputLabel>

                        <Select
                            name='type'
                            variant='outlined'
                            value={userTheme || ''}
                            onChange={onThemeChange}
                            labelWidth={54}
                        >
                            {THEME_MODE_OPTIONS.map((item, i) => (
                                <MenuItem
                                    value={item.value}
                                    key={i}
                                >
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </FormGroup>
            </div>
        </Wrapper>
    );
}

export default SidebarMenu;
