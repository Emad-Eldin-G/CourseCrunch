import {Link, Routes, Route, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {CTable, CAccordionItem, CAccordionHeader, CAccordionBody, CAccordion} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css';

import module from "../data/Module.json";

import CO1107 from "../assets/ModuleImages/CO1107.jpg";


const ModulePage = () => {
    const { moduleCode } = useParams();
    const [assesmentMenu, setAssesmentMenu] = useState(false)

    const moduleData = module.find((module) => module.title === moduleCode)
    console.log(moduleData)

    const columns = [
        {
            key: 'id',
            label: 'Assesments',
            _props: { scope: 'col' },
        },
        {
            key: 'Description',
            _props: { scope: 'col' },
        },
        {
            key: 'Difficulty',
            _props: { scope: 'col' },
        },
        {
            key: 'Fun',
            _props: { scope: 'col' },
        },
        {
            key: 'Duration',
            _props: { scope: 'col' },
        },
    ]
    const items = [
        {
            id: "CW-1",
            Description: 'Develop a simple application using Java, utilizing the concepts of OOP',
            Difficulty: '37% thought it was difficult',
            Fun: '65% thought it was fun',
            Duration: '2 weeks',
            _cellProps: { id: { scope: 'row' } },
        },{
            id: "CW-2",
            Description: 'Collaborate on Github to create an application using JavaFX (Team Project)',
            Difficulty: '55% thought it was difficult',
            Fun: '80% thought it was fun',
            Duration: '5 weeks',
            _cellProps: { id: { scope: 'row' } },
        },{
            id: "Class Test",
            Description: 'Online BlackBoard test on concepts from weeks 1-5 (All MCQs)',
            Difficulty: '15% thought it was difficult',
            Fun: '92% thought it was fun',
            Duration: '1 hour',
            _cellProps: { id: { scope: 'row' } },
        },{
            id: "Final Exam",
            Description: 'Final Exam on all concepts covered in the module, physical face to face exam, (Mix of MCQs and written questions)',
            Difficulty: '72% thought it was difficult',
            Fun: '12% thought it was fun',
            Duration: '2 hours 30 minutes',
            _cellProps: { id: { scope: 'row' } },
        }
    ]

    const handleAssesment = () => {
        setAssesmentMenu(!assesmentMenu)

    }

    return (
        <div className={"w-full h-full flex items-center justify-center"}>
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-gray-700 pl-14 pr-14 md:pl-5 md:pr-5 transition-all ease-in-out">

                <div className={"mb-10"}>
                    <div className="h-auto col-span-2 row-span-1 p-2 flex flex-col items-center  ... ">
                        <h1 className={"text-6xl sm:text-4xl font-bold"}>{moduleCode}</h1>
                        <p className={"text-2xl sm:text-xl font-bold"}>{moduleData.name}</p>
                        <p className={"text-xl sm:text-lg font-bold"}>~ {moduleData.Obligation}</p>
                        <br/>
                    </div>

                    <div className={"flex flex-row text-left gap-14 p-3 min-h-full rounded-md"}>
                        <div className={"flex flex-col gap-5 h-48 justify-between"}>
                            <p className={"text-xl sm:text-lg font-bold"}>
                                Lecturers:
                                <br/>
                                <div className={"ml-5 text-l"}>
                                    {moduleData.lecturers.map((lecturer, index) => (
                                        <li key={index} className={"font-normal text-lg sm:text-sm"}>{lecturer}</li>
                                    )
                                    )}
                                </div>
                            </p>
                            <p className={"text-xl sm:text-lg font-bold"}>
                                Department:
                                <br/>
                                <li className={"font-normal text-lg sm:text-sm"}>Computing and Mathematical Sciences</li>
                            </p>
                        </div>

                        <div className={"flex flex-col justify-between h-48"}>
                            <p className={"text-xl sm:text-lg font-bold"}>
                                Year of Study:
                                <br/>
                                <li className={"font-normal text-lg sm:text-sm"}>Y1 Module</li>
                            </p>
                            <p className={"text-xl sm:text-lg font-bold"}>
                                Last Updated:
                                <br/>
                                <li className={"font-normal text-lg sm:text-sm"}>Last Year</li>
                            </p>
                        </div>
                    </div>
                </div>


                <div className="row-span-3 col-span-2 flex flex-col items-center border-2...">
                    <div className={"w-full"}>
                        <button
                            className={"w-36 rounded-md p-2 bg-gray-400 hidden sm:visible"}
                            id={"growHover"}
                            onClick={handleAssesment}>
                            Open Assesment Overview
                        </button>
                        <p className={"text-gray-700 font-bold text-xl mr-auto sm:hidden"}>Assesment Overview: </p>
                        <br/>
                        <CTable columns={columns} items={items} className={"w-full select-none sm:hidden transition-all ease-in-out"} hover/>
                    </div>

                    <div>
                        <p className={"text-gray-700 font-bold text-xl mr-auto"}>What the students say: </p>
                        <br/>

                    </div>

                    <div className={"w-full mb-44"}>
                        <p className={"text-gray-700 font-bold text-xl mr-auto"}>FAQs: </p>
                        <br/>
                        <CAccordion className={"w-full"}>
                            <CAccordionItem itemKey={1}>
                                <CAccordionHeader className={"text-gray-700 font-bold"}>Commitment hours per week?</CAccordionHeader>
                                <CAccordionBody className={"text-gray-700 visible"}>
                                    <p>
                                        <strong>8 hours per week excluding individual study time.</strong><br/>
                                        These 16 hours are divided between Lectures, Seminars and Computer Labs.<br/>
                                        Lectures: 4 hours per week<br/>
                                        Seminars: 2 hours per week<br/>
                                        Computer Labs: 2 hours per week<br/>
                                    </p>
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={2}>
                                <CAccordionHeader className={"text-gray-700 font-bold"}>Accordion Item #2</CAccordionHeader>
                                <CAccordionBody className={"text-gray-700 visible"}>
                                    <p>
                                        <strong>This is the second item's accordion body.</strong> It is hidden by
                                        default, until the
                                        collapse plugin adds the appropriate classes that we use to style each element.
                                        These classes
                                        control the overall appearance, as well as the showing and hiding via CSS
                                        transitions. You can
                                        modify any of this with custom CSS or overriding our default variables. It's
                                        also worth noting
                                        that just about any HTML can go within the <code>.accordion-body</code>, though
                                        the transition
                                        does limit overflow.
                                    </p>
                                </CAccordionBody>
                            </CAccordionItem>
                            <CAccordionItem itemKey={3}>
                                <CAccordionHeader className={"text-gray-700 font-bold"}>Accordion Item #3</CAccordionHeader>
                                <CAccordionBody className={"text-gray-700 visible"}>
                                    <p>
                                        <strong>This is the second item's accordion body.</strong> It is hidden by
                                        default, until the
                                        collapse plugin adds the appropriate classes that we use to style each element.
                                        These classes
                                        control the overall appearance, as well as the showing and hiding via CSS
                                        transitions. You can
                                        modify any of this with custom CSS or overriding our default variables. It's
                                        also worth noting
                                        that just about any HTML can go within the <code>.accordion-body</code>, though
                                        the transition
                                        does limit overflow.
                                    </p>
                                </CAccordionBody>
                            </CAccordionItem>
                        </CAccordion>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ModulePage;