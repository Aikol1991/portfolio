import React from 'react';
import {BsArrowUpRight} from "react-icons/bs";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";


const services = [
    {
        name: 'John Wick',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa explicabo itaque iure nisi nulla pariatur placeat quidem quos tenetur.',
        link: 'learn more'
    },
    {
        name: 'John Wick 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa explicabo itaque iure nisi nulla pariatur placeat quidem quos tenetur.',
        link: 'learn more'
    },
    {
        name: 'John Wick 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa explicabo itaque iure nisi nulla pariatur placeat quidem quos tenetur.',
        link: 'learn more'
    },
    {
        name: 'John Wick 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa explicabo itaque iure nisi nulla pariatur placeat quidem quos tenetur.',
        link: 'learn more'
    },

]
const Services = () => {
    return <section className="section" id="services">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row">
                <motion.div
                    variants={fadeIn('right', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}}
                    className="flex-1 lg:bg-wick lg:bg-top bg-no-repeat mix-blend-dark mb-12 lg:mb-0">
                    <h2 className="h2 text-secondary my-5 px-10 mb-6">What I do?</h2>
                    <h3 className="h3 max-w-[455px] my-5 px-5 mb-16">I'm a Killer with over 8 years of experience.</h3>
                    <button className="btn btn-sm">Watch my movies</button>
                </motion.div>
                <motion.div
                    variants={fadeIn('left', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}}
                    className="flex-1">
                    <div>
                        {services.map((service, index) => {
                            const {name, description, link} = service;
                            return <div className="border-b border-white/20 h-[146px] mb-38px flex" key={index}>
                                <div className="max-w-[476px]">
                                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                                    <p className="font-secondary leading-tight">{description}</p>
                                </div>
                                <div className="flex flex-col flex-1 items-end">
                                    <a href="#" className="btn w-10 h-6 mb-[42px] flex justify-center items-center"><BsArrowUpRight/></a>
                                    <a href="#" className="text-gradient text-sm">{link}</a>
                                </div>
                            </div>
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    </section>;
};

export default Services;
