import {Link, Routes, Route, useParams} from "react-router-dom";
import { useState } from "react";

import {CTable, CAccordionItem, CAccordionHeader, CAccordionBody, CAccordion} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css';

import CO1107 from "../assets/ModuleImages/CO1107.jpg";


const ModulePage = () => {
    const { moduleCode } = useParams();
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

    return (
        <div className={"w-full h-full flex items-center justify-center"}>
            <div className="w-full h-full grid grid-rows-4 grid-flow-col gap-2 text-gray-700 pl-10 pr-10">
                <div className="row-span-4 ...">
                    <div className={"flex flex-col gap-7 p-3 min-h-full rounded-md"}>
                        <p className={"text-xl font-bold"}>
                            Lecturers:
                            <br/>
                            <div className={"ml-5"}>
                                <li className={"font-normal text-lg"}>Kim Min</li>
                                <li className={"font-normal text-lg"}>Kareem Ahmad</li>
                            </div>
                        </p>
                        <p className={"text-xl font-bold"}>
                            Department:
                            <br/>
                            <li className={"font-normal text-lg"}>Computing and Mathematical Sciences</li>
                        </p>
                        <p className={"text-xl font-bold"}>
                            Year of Study:
                            <br/>
                            <li className={"font-normal text-lg"}>Y1 Module</li>
                        </p>
                        <p className={"text-xl font-bold"}>
                            Last Updated:
                            <br/>
                            <li className={"font-normal text-lg"}>Last Year</li>
                        </p>
                        <p className={"text-xl font-bold"}>Mandatory module ❗️</p>
                    </div>
                </div>

                <div className="h-auto col-span-2 row-span-1 p-2 flex flex-col items-center  ... ">
                    <h1 className={"text-6xl font-bold"}>{moduleCode}</h1>
                    <p className={"text-2xl font-bold"}>Object Oriented Programming</p>
                    <br/>
                    <img src={CO1107} alt={"moduleImage"} className={"w-1/2 aspect-video mb-5 rounded-md"}/>
                </div>

                <div className="row-span-3 col-span-2 flex flex-col items-center border-2...">
                    <div>
                        <p className={"text-gray-700 font-bold text-xl mr-auto"}>Assesment Overview: </p>
                        <br/>
                        <CTable columns={columns} items={items}
                                className={"w-full select-none transition-all ease-in-out"} hover/>
                    </div>

                    <div>
                        <p className={"text-gray-700 font-bold text-xl mr-auto"}>What the students say: </p>
                        <br/>

                    </div>

                    <div className={"min-w-full"}>
                        <p className={"text-gray-700 font-bold text-xl mr-auto"}>FAQs: </p>
                        <br/>
                        <CAccordion className={"min-w-full"}>
                        <CAccordionItem itemKey={1}>
                            <CAccordionHeader className={"text-gray-700"}>Accordion Item #1</CAccordionHeader>
                            <CAccordionBody className={"text-gray-700 visible"}>
                                <p>
                                <strong>This is the first item's accordion body.</strong> It is hidden by default, until the
                                collapse plugin adds the appropriate classes that we use to style each element. These classes
                                control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                does limit overflow.
                                </p>
                            </CAccordionBody>
                        </CAccordionItem>
                        <CAccordionItem itemKey={2}>
                            <CAccordionHeader className={"text-gray-700"}>Accordion Item #2</CAccordionHeader>
                            <CAccordionBody className={"text-gray-700 visible"}>
                                <p>
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                collapse plugin adds the appropriate classes that we use to style each element. These classes
                                control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                                does limit overflow.
                                </p>
                            </CAccordionBody>
                        </CAccordionItem>
                        <CAccordionItem itemKey={3}>
                            <CAccordionHeader className={"text-gray-700"}>Accordion Item #3</CAccordionHeader>
                            <CAccordionBody className={"text-gray-700 visible"}>
                                <p>
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                                collapse plugin adds the appropriate classes that we use to style each element. These classes
                                control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                                modify any of this with custom CSS or overriding our default variables. It's also worth noting
                                that just about any HTML can go within the <code>.accordion-body</code>, though the transition
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