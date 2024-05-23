import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { styled } from '@mui/system';
const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const drawerWidth = 240;

function SwithColorModeButton() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (

        <IconButton
            className="float-right justify-content-end px-5 py-5"
            onClick={colorMode.toggleColorMode}
            color="inherit"
        >
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    );
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function PersistentDrawerLeft(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar sx={{ justifyContent: "space-between" }} className='toolbar'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none', }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        ECD Project
                    </Typography>
                    <SwithColorModeButton />
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: 'rgba(255,255,255,0.1)'
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Dashboard', 'Qualification', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Gender', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main>
                <DrawerHeader />
                {
                    props.App
                }
            </Main>
        </Box>
    );
}

export default function ToggleColorMode(props) {
    const [mode, setMode] = React.useState(
        localStorage.getItem('colorMode') || 'dark'
    );
    const [theme, setTheme] = React.useState(null); // Declare theme state variable

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const newMode = prevMode === 'light' ? 'dark' : 'light';
                    localStorage.setItem('colorMode', newMode);
                    return newMode;
                });
            },
        }),
        []
    );

    React.useEffect(() => {
        const themeDark = createTheme({
            palette: {
                mode: 'dark',
                primary: {
                    main: 'rgba(255,255,255,0.1)',
                },
            },
            components: {
                MuiCssBaseline: {
                    styleOverrides: `
                    body {
                        background: linear-gradient(to right top, #001f33, #0f192a, #151321, #150d18, #10070e, #11050c, #12040a, #130207, #1b030d, #210513, #270618, #2d061d);
                        -webkit-background-size: cover;
                        background-size: cover !important;
                        background-repeat: no-repeat;
                        width: 100vw !important;
                        height: 100% !important;
                    }
                .toolbar {
                    
                }
                .css-151f7lc-MuiPaper-root-MuiAppBar-root {
                    background-color: rgba(0,0,0,0.1) !important;
                }
                .css-l6o8b1-MuiPaper-root-MuiAppBar-root {
                    background-color: rgba(0,0,0,0.1) !important;
                    
                }
            `,
                },
            },
        });

        const themeLight = createTheme({
            // palette: {
            //     mode: 'light',
            //     primary: {
            //         main: 'rgba(255,255,255,0.1)',
            //         blue: '#203941'
            //     },

            // },
            components: {
                MuiCssBaseline: {
                    styleOverrides: `
                        body {
                            background: linear-gradient(to right top, #fce9f4, #fbedf8, #fbf2fb, #fbf6fd, #fcfafe, #fcfbff, #fbfbff, #fbfcff, #f7faff, #f2f8ff, #ecf6ff, #e6f5ff);
                            background-size: cover !important;
                            background-repeat: no-repeat;
                            width: 100vw !important;
                            height: 100% !important;
                        }
                    `,
                },
                MuiMenu: {
                    styleOverrides: {
                        paper: {
                            boxShadow: 'none',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        },
                    },
                },
            },
        });

        const selectedTheme = mode === 'dark' ? themeDark : themeLight;
        setTheme(selectedTheme); // Set the theme state variable
    }, [mode]);

    if (!theme) {
        return null; // Return null or a loading indicator while the theme is being initialized
    }

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <PersistentDrawerLeft App={props.App} />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}