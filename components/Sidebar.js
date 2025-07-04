import { Drawer, Box, IconButton, Tooltip } from "@mui/material";
import { GitHub, LinkedIn, Email, Description } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from 'next/link';
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const drawerWidth = 240;
const navItems = [
    { text: "About", path: "/about" },
    { text: "Projects", path: "/projects" },
    { text: "Colophon", path: "/colophon" },
];

function LinkedInIcon() {
    return (
        <Link href="https://www.linkedin.com/in/vincentbowen/">
            <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9, rotate: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <LinkedIn sx={{ fontSize: 32 }} />
            </motion.div>
        </Link>
    );
}

function GithubIcon() {
    return (
        <Link href="https://github.com/vincedbowen">
            <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9, rotate: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <GitHub sx={{ fontSize: 32 }} />
            </motion.div>
        </Link>
    );
}

function EmailIcon() {
    return (
        <Link href="mailto:vincent@vincentbowen.com">
            <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9, rotate: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <Email sx={{ fontSize: 32 }} />
            </motion.div>
        </Link>
    );
}

function ResumeDownload() {
    return (
        <Tooltip title="Download my resume" arrow>
            <Link href="/BowenVincent2024.pdf" target="_blank" rel="noopener noreferrer">
                <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9, rotate: -10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <Description sx={{ fontSize: 32 }} />
                </motion.div>
            </Link>
        </Tooltip>
    );
}

export default function Sidebar() {
    const router = useRouter();
    const isMobile = useMediaQuery('(max-width:600px)');
    const [open, setOpen] = useState(false);

    const drawerContent = (
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            {/* Sidebar */}
            <Box>
                <h1
                    className="
                            pt-3 pl-3 font-bold text-5xl
                            leading-none whitespace-pre-line
                            hover:underline transition-[text-decoration] duration-200 cursor-pointer
                        "
                    onClick={() => { router.push("/"); if (isMobile) setOpen(false); }}
                >
                    Vincent Bowen
                </h1>
                <div className="pl-3 text-lg text-gray-700">Software Engineer</div>
                <ul className="pt-24">
                    {navItems.map(({ text, path }) => (
                        <li
                            key={text}
                            className="pl-3 my-6 cursor-pointer text-lg hover:underline transition-[text-decoration] duration-200"
                            onClick={() => { router.push(path); if (isMobile) setOpen(false); }}
                        >
                            {text}
                        </li>
                    ))}
                </ul>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'left', mb: 2 }}>
                <IconButton color="inherit" sx={{ boxShadow: 'none', '&:hover': { boxShadow: 'none', background: 'none' } }}><LinkedInIcon /></IconButton>
                <IconButton color="inherit" sx={{ boxShadow: 'none', '&:hover': { boxShadow: 'none', background: 'none' } }}><GithubIcon /></IconButton>
                <IconButton color="inherit" sx={{ boxShadow: 'none', '&:hover': { boxShadow: 'none', background: 'none' } }}><EmailIcon /></IconButton>
                <IconButton color="inherit" sx={{ boxShadow: 'none', '&:hover': { boxShadow: 'none', background: 'none' } }}><ResumeDownload /></IconButton>
            </Box>
        </Box>
    )
    return (
        <>
            {isMobile ? (
                <>
                    <IconButton
                        onClick={() => setOpen(true)}
                        sx={{
                            position: "fixed",
                            top: 16,
                            left: 16,
                            zIndex: 2000,
                            background: "white",
                            boxShadow: 2,
                        }}
                        aria-label="Open sidebar"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor="left"
                        open={open}
                        onClose={() => setOpen(false)}
                        variant="temporary"
                        ModalProps={{
                            keepMounted: true,
                        }}
                        slotProps={{
                            backdrop: {
                                sx: {
                                    backgroundColor: "transparent",
                                }
                            }
                        }}
                        sx={{
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                                backgroundColor: 'rgba(0,0,0,0)',
                                color: 'black',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                backdropFilter: 'blur(10px)',
                                backgroundImage: 'none',
                                zIndex: 20,
                            },
                        }}
                    >
                        {drawerContent}
                    </Drawer>
                </>
            ) : (
                <Box sx={{ display: "flex" }}>
                    <Drawer
                        variant="permanent"
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                                backgroundColor: 'rgba(0,0,0,0)',
                                color: 'black',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                backdropFilter: 'blur(10px)',
                                backgroundImage: 'none',
                                zIndex: 20,
                            },
                        }}
                    >
                        {drawerContent}
                    </Drawer>
                </Box>
            )
            }
        </>
    );
}