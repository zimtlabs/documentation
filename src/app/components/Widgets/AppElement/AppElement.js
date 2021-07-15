import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Collapse } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import clsx from 'clsx';

import GithubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';

import JsIcon from '../../../../../public/assets/svg/js.svg';
import TsIcon from '../../../../../public/assets/svg/ts.svg';

import { IconButton, CodeSnippet, Wrapper } from '../../';
import { RequestService } from '../../../services';
import { parseMarkdownFileReference, getGithubFileURL } from '../../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginBottom: 24,
    },
    error: {
        color: '#aaa',
        'font-weight': 600,
        paddingTop: 15,
        'text-transform': 'uppercase',
    },
    demo: {
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid #eee',
        borderRadius: 4,
        padding: 24,
    },
    options: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: theme.palette.text.secondary,
        marginTop: '0.5em',
    },
    optionsLeft: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    optionsRight: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    toggleButton: {
        height: 32,

        '& svg': {
            width: 24,
            height: 24,
            fill: 'currentColor',
        },
    },
}), { name: 'AppElement' });

export default function AppElement(props) {
    const classes = useStyles(props);
    const [element, setElement] = useState();
    const [error, setError] = useState();
    const [open, setOpen] = useState(false);
    const [files, setFiles] = useState([]);
    const [selectedFile, setSelectedFile] = useState();
    const {
        text,
        titles,
        // eslint-disable-next-line no-unused-vars
        ...other
    } = props;

    const options = parseMarkdownFileReference(props.text);

    useEffect(() => {
        getElement();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getElement = async () => {
        try {
            const module = await import(`../../../../pages/${titles.foldersString}/${titles.file}/${options.main}`);
            setElement(module.default);

            // Download the syntax for main and all extensions, and add it as state array to loop and make tabs of
            let codeFiles = new Set([options.main]);

            if (options.other) options.other.forEach(option => codeFiles.add(option));

            const _files = [];

            for (const file of Array.from(codeFiles)) {
                try {
                    const _file = await RequestService.getPage(titles.folder, titles.file, file);

                    let ext = file.split('.');
                    ext = ext[ext.length - 1];

                    _files.push({
                        ext,
                        name: file,
                        code: _file,
                    });
                } catch (error) {
                    console.log(`${file} not found`);
                }
            }

            setFiles(_files);
            setSelectedFile(_files[0]);
        } catch (error) {
            setError('No demo found');
        }
    };

    const getIcon = ext => {
        ext = ext && ext.toLowerCase();

        if (ext.indexOf('js') > -1) return <JsIcon />;
        if (ext.indexOf('ts') > -1) return <TsIcon />;
    };

    return (
        <Wrapper>
            <div
                className={clsx(classes.root, other.className)}
            >
                {/* Demo */}
                <div className={classes.demo}>
                    {element}
                </div>

                {/* Options */}
                <div className={classes.options}>
                    {/* Left */}
                    <div className={classes.optionsLeft}>
                        {open && !!files.length && (
                            <ToggleButtonGroup
                                size='small'
                            >
                                {files.map((f, index) => (
                                    <ToggleButton
                                        key={index}
                                        value={f.name}
                                        selected={(selectedFile && selectedFile.name) === f.name}
                                        onClick={() => setSelectedFile(f)}
                                        className={classes.toggleButton}
                                    >
                                        {getIcon(f.ext)}
                                    </ToggleButton>
                                ))}
                            </ToggleButtonGroup>
                        )}
                    </div>

                    {/* Right */}
                    <div className={classes.optionsRight}>
                        <IconButton
                            color='inherit'
                            onClick={() => setOpen(!open)}
                        >
                            <CodeIcon />
                        </IconButton>

                        <IconButton
                            color='inherit'
                            href={getGithubFileURL(titles.folder, titles.file, selectedFile && selectedFile.name)}
                            target='_blank'
                        >
                            <GithubIcon />
                        </IconButton>
                    </div>
                </div>

                {/* Demo code */}
                <Collapse in={open} timeout='auto' unmountOnExit>
                    {selectedFile && (
                        <CodeSnippet
                            code={selectedFile.code}
                            language={selectedFile.ext}
                        />
                    )}
                </Collapse>

                {error && <div className={classes.error}>{error}</div>}
            </div>
        </Wrapper>
    );
}
