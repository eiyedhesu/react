import React from "react";
import ClassComponent from "./Pembahasan/ClassComponent";
import FunctionalComponent from "./Pembahasan/FunctionalComponent";


export default class Komponen extends React.Component{
    render (){
       return (
        <div>
        <ClassComponent nama="Muhammad Fajar Suntian"/>
        <FunctionalComponent nama="Muhammad Fajar Suntian"/>
        </div>


       )
       
    }
}
