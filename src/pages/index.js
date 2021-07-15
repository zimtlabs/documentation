import React, { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import IconSDK from '@material-ui/icons/Code';
import IconAPI from '@material-ui/icons/Http';

import { StorageService } from '../app/services';
import { Title, Typography, Quick } from '../app/components';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: theme.breakpoints.values['xxl'],
        margin: '0 auto',
        padding: '94px 32px',
    },
    text: {
        color: theme.palette.text.primary,
    },
    list: {
        'margin-top': 15,
        'padding-left': 16,

        '& > *': {
            marginBottom: 9,

            '&:last-child': {
                marginBottom: 0,
            },
        },
    },
    content: {
        textAlign: 'center',
        marginTop: 54,

        [`@media only screen and (min-width: ${theme.breakpoints.values.md}px)`]: {
            marginTop: 95,
        },
    },
    description: {
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 32,
        fontSize: 15,
    },
}), { name: 'Home' });

function Home() {
    const classes = useStyles();

    useEffect(() => {
        StorageService.sidebarSub.next(false);

        StorageService.crumbSub.next([
            { label: 'Home' },
        ]);
    }, []);

    return (
        <>
            <NextSeo
                title='ZIMT Documentation'
                description='ZIMT API, SDK documentation.'
                openGraph={{
                    title: 'ZIMT Documentation',
                    description: 'ZIMT API, SDK documentation.',
                    images: [
                        { url: '/assets/images/social-default.jpg' },
                    ],
                    site_name: 'ZIMT',
                }}
            />

            <div className={classes.root}>
                <Title
                    title='ZIMT Documentation'

                    align='center'
                >
                    <Typography
                        className={classes.description}
                    >
                        Documentation for the ZIMT Hub API and SDKs.
                    </Typography>
                </Title>

                <div
                    className={classes.content}
                >
                    <Grid container spacing={5} direction='row' style={{ textAlign: 'left' }}>
                        <Grid item xs={12} lg={6}>
                            <Quick
                                title='Hub API'
                                titleIcon={<IconAPI fontSize='large' />}
                                to={'/api'}
                                content={[
                                    { text: `Examples` },
                                    { text: `Health` },
                                    {
                                        type: 'code', format: 'bash', text: `curl -X GET {Hub API URL}

// response
{
  "response": "Ok",
  "meta": {
    "code": 200
  }
}
` },
                                    { text: `Get assets` },
                                    {
                                        type: 'code', format: 'bash', text: `curl -X GET {Hub API URL}/assets \\
-H 'Authorization: ZIMT_TOKEN eaw3123...'

// response
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "object": {
          "meta": {
            "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
            "timestamp": "2020-02-10T19:16:13Z"
        },
        "signature": "0xe633051fc76ae...",
      },
      "receipt": {
        "received_at": 1579278115
      }
    }
  ],
  "meta": {
    "code": 200,
    "message": "Ok"
  },
  "pagination": {
    "total": 445,
    "limit": 30,
    "skip": 0,
    "next": "0x123...",
    "previous": "0x123...",
    "hasNext": true,
    "hasPrevious": false
  }
}
` },
                                ]}
                            />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <Quick
                                title='SDK JavaScript'
                                titleIcon={<IconSDK fontSize='large' />}
                                to={'/sdk/javascript/getting-started/installation'}
                                content={[
                                    { text: `Install` },
                                    {
                                        type: 'code', format: 'bash', text: `// yarn
yarn add @zimt/sdk

// npm
npm install @zimt/sdk` },
                                    { text: `Import` },
                                    {
                                        type: 'code', format: 'javascript', text: `import ZIMTHubSDK from '@zimt/sdk';`
                                    },

                                    { text: `Use` },
                                    {
                                        type: 'code', format: 'javascript', text: `const sdk = new ZIMTHubSDK({
    api: {
        core: "Hub API URL",
    },
    private_key: "Account's private key",
    api_key: "ZIMT Hub provided API key",
});

const assets = await sdk.assets.getMany();

// assets
{
  "response": [
    {
      "id": "0x1512258c1a082a1148e655cf4abf13b914e31e7e485191c2b6b5ee466e03c951",
      "object": {
          "meta": {
            "created_by": "0x8752F61635543a870826D9F4CA20a9D1F3934079",
            "timestamp": "2020-02-10T19:16:13Z"
        },
        "signature": "0xe633051fc76ae...",
      },
      "receipt": {
        "received_at": 1579278115
      }
    }
  ],
  "meta": {
    "code": 200,
    "message": "Ok"
  },
  "pagination": {
    "total": 445,
    "limit": 30,
    "skip": 0,
    "next": "0x123...",
    "previous": "0x123...",
    "hasNext": true,
    "hasPrevious": false
  }
}
` },
                                ]}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
}

export default Home;
