/*
 * Copyright (c) ZIMT AG - All Rights Reserved 2020
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Contact: tech@zimt.co
 */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

import { Button, Wrapper } from '../../';
import { CookieService } from '../../../services';

const useStyles = makeStyles(theme => ({
    root: {

    },
}), { name: 'Privacy' });

export default function Privacy(props) {
    const classes = useStyles(props);
    const [show, setShow] = useState(false);

    useEffect(() => {
        init();
        // eslint-disable-next-line
    }, []);

    const init = () => {
        try {
            const id = 'ZIMT_privacy_agreement';
            const cookie = CookieService.get(id);

            if (!cookie) setShow(true);
            else {
                if (props.onSuccess) props.onSuccess();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const agree = () => {
        // Create a cookie
        const id = 'ZIMT_privacy_agreement';

        CookieService.set(id, 'agreed');

        setShow(false);

        if (props.onSuccess) props.onSuccess();
    };

    return (
        <Wrapper>
            <Dialog
                open={show}
                maxWidth='sm'
                fullWidth
                className={classes.root}
            >
                <DialogTitle>We use cookies</DialogTitle>

                <DialogContent>
                    <DialogContentText>We use cookies to improve your experience using our apps. By choosing <b>I Agree</b>, you consent to our use of cookies and other tracking technologies across all ZIMT apps.</DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button
                        component='a'
                        target='_blank'
                        href='https://zimt.co/privacy-policy'
                        variant='text'
                        color='default'
                    >
                        Learn More
                </Button>

                    <Button
                        variant='contained'
                        color='primary'
                        onClick={agree}
                    >
                        I Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </Wrapper>
    );
}
