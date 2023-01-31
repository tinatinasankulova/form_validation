import { useForm } from "react-hook-form";

const BasicForm = () => {

const {
  register,
  formState: {errors, isValid },
  handleSubmit,
  reset,
} = useForm({mode: 'onBlur'})

const formSubmitHandler = (data) => {
  console.log(data);
  reset()
  
}  


  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' {...register('username', {required:{
            value: true,
            message: 'Must not be empty',
          }})}/>
          <div>{errors?.username && <p className="error-text">{errors?.username.message}</p>}</div>
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' {...register('lastName', {required:{
            value: true,
            message: 'Must not be empty',
          }, minLength: {
            value: 5,
            message: 'Last name must be more then 5'
          }}
          )}/>
          <div>{errors?.lastName && <p className="error-text">{errors?.lastName.message}</p>}</div>
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='email' id='name' {...register('email', {required:{
          value: true,
          message: 'Must not be empty',
        },  pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "invalid email address"
        }})} />
        <div>{errors?.email && <p className="error-text">{errors?.email.message}</p>}</div>
      </div>
      <div className='form-actions'>
        <button disabled={!isValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
