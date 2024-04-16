
import '../src/App.css';
import { useForm } from 'react-hook-form';
import conTestImg from './conTest.png';

function App() {

  const styles = {
    container: {
      width: "80%",
      margin: "0 auto",
    },
    input: {
      width: "20%",
      display: "block",
      marginTop: "20px",
      height: "40px"
    },
  };

  const {
        register, 
        handleSubmit,
        watch,
        formState: {errors},
      } = useForm();

      const onSubmit = (data) => console.log("Success: Объект формы", data)

  return (
    <div className="App">
      <h4>Sign up</h4>
      <form onSubmit={handleSubmit(onSubmit)}>

        <p>ФОРМЫ БАЗОВОЕ:</p>
        <input {...register("username", { required: true })} placeholder="Username" style={styles.input} />
        <input {...register("email")} placeholder="Email" style={styles.input} />
        <input {...register("password")} placeholder="Password" style={styles.input} />

        <p>СПИСОК ВЫБОРА В ФОРМЕ БАЗОВОЕ:</p>
        <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
        </select>

        <button type="submit">Submit</button>
      </form>

    <h1>{'-'.repeat(50)}</h1>

      <h4>Sign up 2</h4>
      <form onSubmit={handleSubmit(onSubmit)}>

        <p>ВАЛИДАЦИЯ БАЗОВОЕ:</p>
        <p>required:</p>
        <input {...register("requiredEx", { required: true })} placeholder="required" style={styles.input} />
        <p>min (2):</p>
        <input {...register("min", {min: 2})} type='number' placeholder="min" style={styles.input} />
        <p>max (5):</p>
        <input {...register("max", {max: 5})} type='number' placeholder="max" style={styles.input} />
        <p>minLength (10):</p>
        <input {...register("minLength", {minLength: 10})} placeholder="minLength" style={styles.input} />
        <p>maxLength (5):</p>
        <input {...register("maxLength", {maxLength: 5})} placeholder="maxLength" style={styles.input} />
        <p>pattern:</p>
        <input {...register("pattern", {pattern: /[A-Za-z]{3}/})} placeholder="pattern" style={styles.input} />
        <p>validate(positive):</p>
        <input {...register("validate", {
        validate : {
      positive: v => parseInt(v) > 0}})} type='number' placeholder="validate" style={styles.input} />
        <p>valueAsNumber:</p>
        <input {...register("valueAsNumber", {valueAsNumber: true})} type='number' placeholder="valueAsNumber" style={styles.input} />
        <p>valueAsDate:</p>
        <input {...register("valueAsDate", {valueAsDate: true})} placeholder="valueAsDate" style={styles.input} />
        <p>setValueAs (text = -):</p>
        <input {...register("setval", {setValueAs: (v) => v + '-', })} placeholder="setValueAs" style={styles.input} />
        <p>disabled (true):</p>
        <input {...register("disabled", {disabled: true})} placeholder="disabled" style={styles.input} />
        <p>onChange (log):</p>
        <input {...register("onChange", {onChange: e => console.log("OnChange: ", e.target.value)})} placeholder="onChange" style={styles.input} />
        <p>onBlur (log):</p>
        <input {...register("onBlur", {onBlur: e => console.log("onBlur: ", e.target.value)})} placeholder="onBlur" style={styles.input} />
        <p>Value (test):</p>
        <input {...register("Valueex", {value: "test"})} placeholder="Value" style={styles.input} />
        <p>shouldUnregister (true, Вызовется после размонтирования):</p>
        <input {...register("shouldUnregisterex", {shouldUnregister: true})} placeholder="shouldUnregister" style={styles.input} />
        <p>deps (зависимость от других полей):</p>
        <input {...register("depsex", {deps: ['shouldUnregisterex']})} placeholder="deps" style={styles.input} />
            
        <button type="submit">Submit</button>

        <p>Можно оборачивать в controller</p>
        <img src={conTestImg} />


      </form>
    </div>
  );
}

export default App;
