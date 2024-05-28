import './css/Signup.css';
import Input from './Input';
import Divider from './Divider';
import { IonButton, IonImg, IonLabel } from '@ionic/react';
import { mail, personCircle, callOutline, fingerPrintOutline, personOutline, homeOutline, businessOutline } from 'ionicons/icons';
import SignupSelect from './SignupSelect';
import React, { useState } from 'react';

interface ContainerProps {
    className?: string;
    src_logo?: string;
};

const Signup: React.FC<ContainerProps> = ({ className, src_logo }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        rut: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        region: '',
        city: '',
        address: '',
    });

    const [formErrors, setFormErrors] = useState({
        fullName: '',
        rut: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        region: '',
        city: '',
        address: '',
    });


    const validatePassword = (password: string) => {
        return password.length >= 6;
    };

    const validateRUT = (rut: string) => {
        // Implementar validación de RUT chileno aquí
        return true; // Aquí deberías poner la lógica real de validación
    };



    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Limpiar el error del campo si se corrige
        let errors = { ...formErrors };
        switch (name) {
            case 'fullName':
                errors.fullName = value ? '' : 'Nombre Completo es requerido';
                break;
            case 'rut':
                errors.rut = validateRUT(value) ? '' : 'RUT no es válido';
                break;
            case 'username':
                errors.username = value ? '' : 'Usuario requerido';
                break;
            case 'email':
                errors.email = value ? '' : 'Correo Electrónico no es válido';
                break;
            case 'password':
                errors.password = validatePassword(value) ? '' : 'Contraseña debe tener al menos 6 caracteres';
                break;
            case 'confirmPassword':
                errors.confirmPassword = value === formData.password ? '' : 'Las contraseñas no coinciden';
                break;
            case 'phone':
                errors.phone = value ? '' : 'Teléfono no es válido';
                break;
            case 'region':
                errors.region = value ? '' : 'Región es requerida';
                break;
            case 'city':
                errors.city = value ? '' : 'Ciudad es requerida';
                break;
            case 'address':
                errors.address = value ? '' : 'Dirección es requerida';
                break;
            default:
                break;
        }
        setFormErrors(errors);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let errors = { ...formErrors };

        if (!formData.fullName) errors.fullName = 'Nombre Completo es requerido';
        if (!validateRUT(formData.rut)) errors.rut = 'RUT no es válido';
        if (!formData.username) errors.username = 'Usuario requerido';
        if (!formData.email) errors.email = 'Correo Electrónico no es válido';
        if (!validatePassword(formData.password)) errors.password = 'Contraseña debe tener al menos 6 caracteres';
        if (formData.password !== formData.confirmPassword) errors.confirmPassword = 'Las contraseñas no coinciden';
        if (!formData.phone) errors.phone = 'Teléfono no es válido';
        if (!formData.region) errors.region = 'Región es requerida';
        if (!formData.city) errors.city = 'Ciudad es requerida';
        if (!formData.address) errors.address = 'Dirección es requerida';

        setFormErrors(errors);

        const isValid = Object.values(errors).every((error) => error === '');

        if (isValid) {
            // Handle successful signup logic here
            console.log('Form Data:', formData);
        }
    };

    return (
        <div className={className}>
            <div className='login_base'>
                <IonImg src={src_logo} alt='public/Images/logo'></IonImg>
                <form onSubmit={handleSubmit}>
                    <Input
                        className='input_login'
                        label='Nombre Completo'
                        type='text'
                        name='fullName'
                        placeHolder='Nombre Apellido'
                        icon={personCircle}
                        value={formData.fullName}
                        onIonChange={handleChange}
                    />
                    {formErrors.fullName && <IonLabel color='danger'>{formErrors.fullName}</IonLabel>}

                    <Input
                        className='input_login'
                        label='RUT'
                        type='text'
                        name='rut'
                        placeHolder='XXXXXXXX-X'
                        icon={fingerPrintOutline}
                        value={formData.rut}
                        onIonChange={handleChange}
                    />
                    {formErrors.rut && <IonLabel color='danger'>{formErrors.rut}</IonLabel>}

                    <Input
                        className='input_login'
                        label='Usuario'
                        type='text'
                        name='username'
                        placeHolder='Example'
                        icon={personOutline}
                        value={formData.username}
                        onIonChange={handleChange}
                    />
                    {formErrors.username && <IonLabel color='danger'>{formErrors.username}</IonLabel>}

                    <Input
                        className='input_login'
                        label='Correo Electrónico'
                        type='email'
                        name='email'
                        placeHolder='email@gmail.com'
                        icon={mail}
                        value={formData.email}
                        onIonChange={handleChange}
                    />
                    {formErrors.email && <IonLabel color='danger'>{formErrors.email}</IonLabel>}

                    <Input
                        className='input_login'
                        label='Contraseña'
                        type='password'
                        name='password'
                        placeHolder='*********'
                        value={formData.password}
                        onIonChange={handleChange}
                    />
                    {formErrors.password && <IonLabel color='danger'>{formErrors.password}</IonLabel>}

                    <Input
                        className='input_login'
                        label='Confirmar Contraseña'
                        type='password'
                        name='confirmPassword'
                        placeHolder='*********'
                        value={formData.confirmPassword}
                        onIonChange={handleChange}
                    />
                    {formErrors.confirmPassword && <IonLabel color='danger'>{formErrors.confirmPassword}</IonLabel>}

                    <Input
                        className='input_login'
                        label='Teléfono'
                        type='text'
                        name='phone'
                        placeHolder='+56 9 XXXX XXXX'
                        icon={callOutline}
                        value={formData.phone}
                        onIonChange={handleChange}
                    />
                    {formErrors.phone && <IonLabel color='danger'>{formErrors.phone}</IonLabel>}

                    <SignupSelect
                        className='signup_select'
                        label='Región'
                        name='region'
                        placeHolder='Seleccione Región'
                        value={formData.region}
                        onIonChange={handleChange}
                    />
                    {formErrors.region && <IonLabel color='danger'>{formErrors.region}</IonLabel>}

                    <Input
                        className='input_login'
                        label='Ciudad'
                        type='text'
                        name='city'
                        placeHolder='Ciudad'
                        icon={businessOutline}
                        value={formData.city}
                        onIonChange={handleChange}
                    />
                    {formErrors.city && <IonLabel color='danger'>{formErrors.city}</IonLabel>}

                    <Input
                        className='input_login'
                        label='Dirección'
                        type='text'
                        name='address'
                        placeHolder='Dirección'
                        icon={homeOutline}
                        value={formData.address}
                        onIonChange={handleChange}
                    />
                    {formErrors.address && <IonLabel color='danger'>{formErrors.address}</IonLabel>}

                    <Divider className='divider'></Divider>
                    <IonButton className='login_buttom' type='submit'>Registrarse</IonButton>
                </form>
            </div>
            <div className='register_base'>
                <IonLabel>¿Ya tienes cuenta?</IonLabel>
                <a href='/login'>Inicia sesión aquí</a>
            </div>
        </div>
    );
};

export default Signup;