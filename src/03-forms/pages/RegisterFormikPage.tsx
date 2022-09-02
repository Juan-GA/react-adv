import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
import '../styles/styles.css';

export const RegisterFormikPage = () => {

  return (
    <div>
        <h1>Register Formik Page</h1>  
        <Formik
            initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: ''
            }}
            onSubmit={ (values) => {
                console.log(values)
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                             .min(2, 'El nombre debe de tener 3 carácteres o más')
                             .max(15, 'El nombre debe de tener 15 carácteres o menos')
                             .required('Requerido'),

                    email: Yup.string()
                              .email('Revise el formato del correo')
                              .required('Requerido'),

                    password1: Yup.string()
                                  .min(6, 'Mínimo 6 carácteres')
                                  .required('Requerido'),

                    password2: Yup.string()
                                  .oneOf([ Yup.ref('password1') ], 'Las contraseñas no son iguales')
                                  .required('Requerido')
                })
            }
        >
            {
                ({ handleReset }) => (
                    <Form>
                        <MyTextInput label='Nombre' name='name' placeholder='Juan'/>

                        <MyTextInput label='Correo' name='email' type='email' placeholder='Juan@Google.com' />

                        <MyTextInput label='Contraseña' name='password1' type='password' placeholder='*****' />

                        <MyTextInput label='Confirmar contraseña' name='password2' type='password' placeholder='*****' />

                        <button type='submit'>
                            Create
                        </button>

                        <button type='button' onClick={ handleReset }>
                            Reset Form
                        </button>
                    </Form>
                )
            }    
        </Formik>
    </div>
  )
}
