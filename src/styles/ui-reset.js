
const uiReset = theme => ({
    '@global': {
        '*': {
            margin: 0,
            padding: 0,
            border: 0,
            outline: 'none',
            fontSize: '100%',
            background: 'transparent',
            boxSizing: 'border-box',
            touchAction: 'manipulation',
        },

        'html, body': {
            width: '100%',
        },

        body: {
            fontSize: '13px',
            color: '#000',
            fontFamily: '"Rubik", sans-serif',
            backgroundColor: '#fff',
            fontWeight: 'normal',
            fontStyle: 'normal',
            position: 'relative',
            overflowX: 'hidden',
        },

        'img, embed, object, video': {
            maxWidth: '100%',
            height: 'auto',
        },

        p: {
            ...theme.typography.body1,
            color: '#333',
        },

        'p + p': {
            marginTop: '20px',
        },

        li: {
            ...theme.typography.body1
        },

        'h1, h2, h3, h4, h5, h6': {
            lineHeight: 1.17,
            color: '#000',
            fontWeight: 300,
            margin: 0,
            wordWrap: 'break-word',
        },

        'h4, h5, h6': {
            fontWeight: 500,
        },

        h1: {
            fontSize: '40px',
        },

        h2: {
            fontSize: '24px',
        },

        h3: {
            fontSize: '21px',
        },

        h4: {
            fontSize: '17px',
        },

        h5: {
            fontSize: '15px',
        },

        h6: {
            fontSize: '13px',
        },

        a: {
            textDecoration: 'none',
            cursor: 'pointer',
            userSelect: 'none',
            color: theme.palette.primary.main,
        },

        b: {
            fontWeight: 500,
        },

        span: {
            wordWrap: 'break-word',
        },

        hr: {
            boxSizing: 'content-box',
            height: '1px',
            overflow: 'visible',
            background: '#eee',
            width: '100%',
            margin: '25px 0',
        },

        // NProgress
        '#nprogress': {
            direction: 'ltr',
            pointerEvents: 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            zIndex: theme.zIndex.tooltip,
            backgroundColor: '#e0e0e0',
            '& .nprogress-bar': {
                position: 'fixed',
                backgroundColor: theme.palette.secondary.main,
                top: 0,
                left: 0,
                right: 0,
                height: 2,
            },
            '& dd, & dt': {
                position: 'absolute',
                top: 0,
                height: 2,
                boxShadow: `${theme.palette.secondary.main} 1px 0 6px 1px`,
                borderRadius: '100%',
                animation: 'mui-nprogress-pulse 2s ease-out 0s infinite',
            },
            '& dd': {
                opacity: 0.6,
                width: 20,
                right: 0,
                clip: 'rect(-6px,22px,14px,10px)',
            },
            '& dt': {
                opacity: 0.6,
                width: 180,
                right: -80,
                clip: 'rect(-6px,90px,14px,-6px)',
            },
        },
        '@keyframes mui-nprogress-pulse': {
            '30%': {
                opacity: 0.6,
            },
            '60%': {
                opacity: 0,
            },
            to: {
                opacity: 0.6,
            },
        },
    }
});

export default uiReset;
