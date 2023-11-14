import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AiOutlinePhone, AiOutlineArrowDown, AiOutlineSend } from "react-icons/ai";
import ReCAPTCHA from "react-google-recaptcha";




function Form() {

    const [formData, setFormData] = useState({
        'Title': '', // Cambiamos la clave a "numero telefonico"
        Dni: '',
        Email: '',
        'Numerotelefonico': '', // Cambiamos la clave a "numero telefonico"
        'A_x00f1_odepatentamiento': '', // Cambiamos la clave a "numero telefonico"
        'Marcaymodelo': '', // Cambiamos la clave a "numero telefonico"
        'OData__x00bf_TieneGNC_x003f_': 'Si', // Cambiamos la clave a "numero telefonico"
        'OData__x00bf_Suautoesdeusoparticular_x': 'Si', // Cambiamos la clave a "numero telefonico"
        'Codigopostal': '', // Cambiamos la clave a "numero telefonico"
        'Localidad': '', // Cambiamos la clave a "numero telefonico"
        'Codigodeempresa': ''
      });

      const handleRadioChange = (e) => {
        const { id, value } = e.target;
        setFormData({
          ...formData,
          'OData__x00bf_TieneGNC_x003f_': value,
        });
      };

      const handleRadioChange2 = (e) => {
        const { id, value } = e.target;
        setFormData({
          ...formData,
          'OData__x00bf_Suautoesdeusoparticular_x': value,
        });
      };
      

      const handleInputChange = (e) => {
        const { name, value } = e.target;
      
        // Validar que el valor tenga como máximo 8 dígitos
        if (name === 'Dni' && value.length > 8) {
          // Aquí puedes mostrar un mensaje de error o realizar alguna acción
          alert('El DNI no puede tener más de 8 dígitos.');
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
      };

      const isFormValid = () => {
        for (const key in formData) {
          if (key === '¿Tiene GNC?' || key === '¿Su auto es de uso particular?') {
            // Comprobamos si las opciones de radio están seleccionadas
            if (formData[key] !== 'Si' && formData[key] !== 'No') {
              return false;
            }
          } else if (key !== 'Codigodeempresa' && formData[key] === '') { // Modifica la condición aquí
            return false;
          }
        }
        return true;
      };
      const [isCaptchaComplete, setIsCaptchaComplete] = useState(false);
      function onChange(value) {
        console.log("Captcha value:", value);
        setIsCaptchaComplete(!!value);
      }
    
      
      const handleFormSubmit = () => {
        if (isFormValid() && isCaptchaComplete) {
          // Convertir el formulario a JSON
          const formDataJSON = JSON.stringify(formData);
      
          // Configurar la solicitud POST
          fetch('https://prod-03.brazilsouth.logic.azure.com:443/workflows/92cf4ab9f3574f38bcbd10434d8ecea2/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=QWi1iKlEwsBZeN0v0DeXk3G_Afs5kLdPB8fo13_JeWY', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: formDataJSON
          })
          .then(response => {
            if (response.ok) {
              alert('Los datos se enviaron correctamente.');
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            } else {
              alert('Hubo un problema al enviar los datos. Por favor, inténtalo de nuevo.');
            }
          })
          .catch(error => {
            alert('Hubo un error al enviar los datos. Por favor, inténtalo de nuevo.');
            console.error(error);
          });
        } else if (!isCaptchaComplete) {
          alert('Por favor, completa el ReCAPTCHA antes de enviar el formulario.');
        } else {
          alert('Por favor, completa todos los campos requeridos.');
        }
      };
      
      
    return (
        <>

            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8" id="llenar">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Llená el formulario</h1>

                    <p className="mt-4 text-gray-500">
                        Ingresá tus datos de contacto y del auto que quieras asegurar.
                    </p>
                </div>


                <form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div class="" style={{ marginBottom: "-15px" }}>
                        <div class="relative z-0 w-full mb-6 group">
                            <input autocomplete="off" type="text" name='Title' value={formData['Title']} onChange={handleInputChange} id="Title" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre y Apellido</label>
                        </div>
                    </div>
                    <div class="relative z-0 w-full mb-6 group" style={{marginTop: "30px"}}>
                        <input type="number" name='Dni' value={formData.Dni} onChange={handleInputChange} id="dni" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DNI</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="email" name='Email' value={formData.Email} onChange={handleInputChange} id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="number" name='Numerotelefonico' value={formData['Numerotelefonico']} onChange={handleInputChange} id="Numerotelefonico" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Número telefónico</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group" style={{marginTop: "30px"}}>
                    <select id="A_x00f1_odepatentamiento" name="A_x00f1_odepatentamiento" value={formData['A_x00f1_odepatentamiento']} onChange={handleInputChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
    <option value="" selected>Selecciona un año</option>
    {Array.from({ length: new Date().getFullYear() - 1979 }, (_, index) => {
      const year = new Date().getFullYear() - index;
      return (
        <option key={year} value={year}>
          {year}
        </option>
      );
    })}
  </select>
  <label for="A_x00f1_odepatentamiento" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Año de patentamiento</label>
</div>

                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" id="Marcaymodelo" name='Marcaymodelo' value={formData['Marcaymodelo']} onChange={handleInputChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Marca y modelo</label>
                    </div>
                    <fieldset style={{ marginTop: "40px" }}>
                        <legend class="sr-only">Countries</legend>
                        <label for="email" class="block mb-2 text-sm peer-focus:font-medium text-gray-500 dark:text-gray-400">¿Tiene GNC?</label>
                        <div class="grid grid-cols-3 gap-4">
                            <div class="flex items-center mb-4">
                            <input
              type="radio"
              id="signc"
              name="gnc"
              value="Si"
              checked={formData['OData__x00bf_TieneGNC_x003f_'] === 'Si'}
              onChange={handleRadioChange}
            />
            <label htmlFor="signc" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Si
            </label>

                            </div>
                            <div class="flex items-center mb-4">
                            <input
              type="radio"
              id="nognc"
              name="gnc"
              value="No"
              checked={formData['OData__x00bf_TieneGNC_x003f_'] === 'No'}
              onChange={handleRadioChange}
            />
            <label htmlFor="nognc" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              No
            </label>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend class="sr-only">Countries</legend>
                        <label for="email" class="block mb-2 text-sm peer-focus:font-medium text-gray-500 dark:text-gray-400">¿Su auto es de uso particular?</label>
                        <div class="grid grid-cols-3 gap-4">
                            <div class="flex items-center mb-4">
                            <input
              type="radio"
              id="personalsi"
              name="personal"
              value="Si"
              checked={formData['OData__x00bf_Suautoesdeusoparticular_x'] === 'Si'}
              onChange={handleRadioChange2}
            />
            <label htmlFor="personalsi" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Si
            </label>
                            </div>
                            <div class="flex items-center mb-4">
                            <input
              type="radio"
              id="personalno"
              name="personal"
              value="No"
              checked={formData['OData__x00bf_Suautoesdeusoparticular_x'] === 'No'}
              onChange={handleRadioChange2}
            />
            <label htmlFor="personalno" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              No
            </label>
                            </div>
                        </div>
                    </fieldset>
                    <div class="relative z-0 w-full mb-6 group">
                    <input autocomplete="off" type="number" id="Codigopostal" name='Codigopostal' value={formData['Codigopostal']} onChange={handleInputChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Código postal</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                    <input autocomplete="off" type="text" id="Localidad" name='Localidad' value={formData['Localidad']} onChange={handleInputChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Localidad</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input autocomplete="off" type="text" id="Codigodeempresa" name='Codigodeempresa' value={formData['Codigodeempresa']} onChange={handleInputChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Código de empresa (Opcional)</label>
                    </div>
                    <ReCAPTCHA
    sitekey="6LfEAuUoAAAAAE2DiGlr7Kxc0e7cSxdmlU8nOPJI"
    onChange={onChange}
  />,
                    
                    <Button as={Link} style={{backgroundColor:"#339999"}} variant="flat" onClick={handleFormSubmit}
>
        <AiOutlineSend className="text-white"/>
            <span className="text-white	">Enviar</span>
          </Button>                </form>

            </div>
        </>
    );
}

export default Form;
