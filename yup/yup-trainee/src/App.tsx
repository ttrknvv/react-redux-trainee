import React from 'react';
import * as yup from "yup";
import './App.css';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

interface formTestYUP {
  name : string;
  age: number;
  date: string;
}

const fromTestShema = yup.object({
  name: yup.string(),
  age: yup.number().required(),
  date: yup.date()
})

function App() {

const {control, handleSubmit, formState: { errors }} = useForm<formTestYUP>();

const onSubmit: SubmitHandler<formTestYUP> = (data) => {console.log(data); console.log(errors)}

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
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
        render={({field}) => <input {...field}/>} />
        <button disabled={!!errors.age || !!errors.date || !!errors.name}>SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
