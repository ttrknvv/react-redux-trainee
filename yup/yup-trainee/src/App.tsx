import React from 'react';
import * as yup from "yup";
import './App.css';
import { Controller, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

interface formTestYUP {
  name : string;
  age: number;
  date: Date;
  email: string;
}

const formTestShema = yup.object().shape({
  name: yup.string().required().uppercase(),
  age: yup.number().required("Required error age").max(20).min(8).when('name', {
    is: 'nikita',
    then: (schema) => schema.min(10),
}),
  date: yup.date().required("DATE REQUIRED"),
  email: yup.string().email("EMAIL ERROR").required("required email")
});

function App() {

const {control, handleSubmit, formState: { errors }} = useForm<formTestYUP>({ resolver: yupResolver(formTestShema) });

const onSubmit: SubmitHandler<formTestYUP> = (data) => {console.log(data); };
const onError: SubmitErrorHandler<formTestYUP> = (data) => {console.log(errors); }


  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <label>Name:</label>
        <Controller name="name"
        control={control}
        rules={{required: true}}
        render={({field}) => <input {...field} onChange={(e) => {field.onChange(e); }} />} />
        <label>Age:</label>
        <Controller name="age"
        control={control}
        render={({field}) => <input {...field}/>} />
        <label>Date:</label>
        <Controller name="date"
        control={control}
        render={({field}) => <input {...field} type='date' value={String(field.value)}/>} />
        <label>Email:</label>
        <Controller name="email"
        control={control}
        render={({field}) => <input {...field}/>} />
        
        {/* <button disabled={!!errors.age || !!errors.date || !!errors.name}>SUBMIT</button> */}
        <button>SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
