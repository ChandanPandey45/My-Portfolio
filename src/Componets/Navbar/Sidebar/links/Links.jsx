import { motion } from 'framer-motion';

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};

const Links = () => {
    // Adjust the items array to reflect the required order
    const items = [
        "Homepage",
        " MyProjects",
        "About",
        "Contact",
    ];

    return (
        <motion.div className="links" variants={variants}>
            {items.map(item => (
                <motion.a 
                    href={`#${item}`} // Make href lowercase for cleaner links
                    key={item} 
                    variants={itemVariants} 
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.95 }}
                >
                    {item}
                </motion.a>
            ))}
        </motion.div>
    );
};

export default Links;
