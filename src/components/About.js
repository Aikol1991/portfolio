import React from 'react';
import CountUp from 'react-countup';
import {InView, useInView} from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
    const [ref] = useInView({
        threshold: 0.5,
    })
    return <section className="section" id="about" ref={ref}>
            <div className='container mx-auto'>
                <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 bg-john bg-contain bg-no-repeat h-[550px] mix-blend-lighten bg-top'></motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                        className="flex-1">
                        <h2 className="h2 text-secondary">About me.</h2>
                        <h3 className="h3 mb-4">I'm a Killer with over 8 years of experience.</h3>
                        <p className="mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aliquam autem cum earum eligendi et magnam temporibus.
                            Aliquid consequatur cumque debitis excepturi libero recusandae.
                            Aliquam dolor, explicabo laboriosam maiores recusandae rem.
                        </p>
                        <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                            <div>
                                <div className="font-[40px] font-tertiary text-gradient mb-2">
                                    {InView ? <CountUp start={0} end={8} duration={8}/> : null}
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Years of <br/> Experience
                                </div>
                            </div>
                            <div>
                                <div className="font-[40px] font-tertiary text-gradient mb-2">
                                    {InView ? <CountUp start={0} end={20} duration={8}/> : null}
                                    K+
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Missions <br/> Completed
                                </div>
                            </div>
                            <div>
                                <div className="font-[40px] font-tertiary text-gradient mb-2">
                                    {InView ? <CountUp start={0} end={5} duration={8}/> : null}
                                    K+
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Satisfied <br/> Clients
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-8 items-center">
                            <button className="btn btn-lg">Contact me</button>
                            <a href="#" className="text-gradient btn-link">My Portfolio</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>;
};

export default About;
