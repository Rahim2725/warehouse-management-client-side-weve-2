import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
    const form = useRef();

    const sendEmail = async(e) => {
        e.preventDefault();

       await emailjs.sendForm('service_qk6g8qi', 'template_gpvrov5', form.current, 'FO_oYMtVVI3L0OkMV')
            .then((result) => {
                toast.success('Your Message Send Success full')
            }, (error) => {
                toast.error(error.text);
            });

        e.target.reset();
    };
    return (
        <div className='flex h-screen justify-center items-center bg-base-200 '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className='card-body'>
                    <h1 className='text-2xl text-center text-primary font-bold'>Please Contact Me</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="email" name='client_name' placeholder="Email" className="input mt-3 input-bordered block w-full max-w-xs" />
                        <input type="text" placeholder="Subject" name='subject' className="input mt-3 input-bordered block w-full max-w-xs" />
                        <textarea placeholder='Your Message' name='message' className='p-2 mt-3 w-full h-32 input input-bordered'></textarea>
                        <input className='btn btn-secondary btn-outline w-full mt-3' type="submit" value="Send Message" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;