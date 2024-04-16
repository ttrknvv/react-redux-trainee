import React from 'react';
import './App.css';
import { Controller, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

interface MyForm {
  name: string;
  age: number;
  testInput: string;
} 


function App() {

const styles = {
  display: "block",
  form : {
    display: "block",
  }
}

const onSubmit: SubmitHandler<MyForm> = data => {
  console.log(data);
}

const onSubmitError: SubmitErrorHandler<MyForm> = data => {
  console.log("ERROR: ", data);
}

const {register, handleSubmit, clearErrors, reset, setValue, watch, control, formState: {errors}} = useForm<MyForm>({defaultValues:  {
                              age: 20
                            }});

  return (
    <div className='App'>
      <form className='App' onSubmit={handleSubmit(onSubmit, onSubmitError)}>
        <label>Name:</label>
        <input type='text' {...register("name", {validate: (v) => {console.log("CHECK: ", v); return true;}})}/>
        <label>Age:</label>
        <input type='number' {...register("age", {required: true})} style={errors.age ? { backgroundColor: "red"} : {backgroundColor: "green"}} />
        <label>TestController</label>
        <Controller  name="testInput"
          control={control}
          render={({field}) => <input {...field}/>} />
        <button>SEND</button>
        <button type='button' onClick={() => clearErrors()}>Clear errors</button>
        <button type='button' onClick={() => reset({age: 0, name: "cleared"})}>Clear form</button>
        <button type='button' onClick={() => setValue("name", "settedName")}>Set name</button>
        <br />{"Watch(age): отслеживание значения: " + watch("age")}

        <h1>Контроллер для интеграции с другими библиотеками - последний input</h1>



      </form>
    </div>
  );
}

export default App;
