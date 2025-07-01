import { Drawer, Box, Typography, IconButton, Tooltip } from "@mui/material";
import { GitHub, LinkedIn, Email, Description } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from 'next/link';

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

export function ResumeDownload() {
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

    return (
        <Box sx={{ display: "flex" }}>
            {/* Sidebar */}
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: 'rgba(0,0,0,0)',
                        color: 'black', // font color black
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        backdropFilter: 'blur(10px)',
                        backgroundImage: 'none',
                        zIndex: 20,
                    },
                }}
            >
                <Box>
                    <h1
                        className="
                            pt-3 pl-3 font-bold text-5xl
                            leading-none whitespace-pre-line
                            hover:underline transition-[text-decoration] duration-200 cursor-pointer
                        "
                        onClick={() => router.push('/')}
                    >
                        Vincent Bowen
                    </h1>
                    <div className="pl-3 text-lg text-gray-700">Software Engineer</div>
                    <ul className="pt-24">
                        {navItems.map(({ text, path }) => (
                            <li
                                key={text}
                                className="pl-3 my-6 cursor-pointer text-lg hover:underline transition-[text-decoration] duration-200"
                                onClick={() => router.push(path)}
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
            </Drawer>
        </Box>
    );
}