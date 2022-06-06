import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import { SECT } from '../styles/StyledGlobal';
const tiempo = { days: 31, hours: 0, minutes: 0, seconds: 5 }
const { days = 0, hours = 0, minutes = 0, seconds = 0 } = tiempo;

const Temporizador = () => {

    const [[ds, hrs, mins, secs], setTime] = useState([
        days,
        hours,
        minutes,
        seconds
    ]);

    const [estado1, setEstado1] = useState(true);
    const [estado2, setEstado2] = useState(true);
    const [estado3, setEstado3] = useState(true);
    const [estado4, setEstado4] = useState(true);

    const restarTiempo = () => {

        if (ds === 0 && hrs === 0 && mins === 0 && secs === 0) {
            swal({
                icon: "success",
                button: {
                    text: "Aceptar",
                },
                title: "Su tiempo se acabo!!",
            });
        } else if (hrs === 0 && mins === 0 && secs === 0) {
            setTime([ds - 1, 23, 59, 59]);
            setEstado4(false);
            setEstado3(false);
            setEstado2(false);
            setEstado1(false);
        } else if (mins === 0 && secs === 0) {
            setTime([ds, hrs - 1, 59, 59]);
            setEstado3(false);
            setEstado2(false);
            setEstado1(false);
        } else if (secs === 0) {
            setTime([ds, hrs, mins - 1, 59]);
            setEstado2(false);
            setEstado1(false);
        } else {
            setTime([ds, hrs, mins, secs - 1]);
            setEstado1(false);
        }
    };

    useEffect(() => {
        const timeId = setInterval(() => {
            restarTiempo();
            setTimeout(() => {
                setEstado1(true);
                setEstado2(true);
                setEstado3(true);
                setEstado4(true);
            }, 500);
        }, 1000);
        return () => clearInterval(timeId);
    });


    return (
        <div className='d-flex justify-content-center gap-4 my-5'>
            <SECT className='text-center'>
                {
                    estado4
                        ? <div className='d-flex align-items-center justify-content-center estado4-2'>
                            <section>
                                <section className='arcos t'>
                                    <section className='arc-t-l'></section>
                                    <section className='arc-t-r'></section>
                                    <h2 className='fw-bold m-auto'>{`${ds.toString().padStart(2, '0')}`}</h2>
                                </section>
                                <section className='arcos b'>
                                </section>
                            </section>
                        </div>
                        : <div className='d-flex align-items-center justify-content-center estado4'>
                            <section>
                                <section className='arcos t'>
                                    <section className='arc-t-l'></section>
                                    <section className='arc-t-r'></section>
                                    <h2 className='fw-bold m-auto'>{`${ds.toString().padStart(2, '0')}`}</h2>
                                </section>
                                <section className='arcos b'>
                                </section>
                            </section>
                        </div>
                }
                <h6 className='mt-3 mb-5'>DAYS</h6>
            </SECT>
            <SECT className='text-center'>
                {
                    estado3
                        ? <div className='d-flex align-items-center justify-content-center estado3-2'>
                            <section>
                                <section className='arcos t'>
                                    <section className='arc-t-l'></section>
                                    <section className='arc-t-r'></section>
                                    <h2 className='fw-bold m-auto'>{`${hrs.toString().padStart(2, '0')}`}</h2>
                                </section>
                                <section className='arcos b  '>
                                </section>
                            </section>
                        </div>
                        : <div className='d-flex align-items-center justify-content-center estado3'>
                            <section>
                                <section className='arcos t'>
                                    <section className='arc-t-l'></section>
                                    <section className='arc-t-r'></section>
                                    <h2 className='fw-bold m-auto'>{`${hrs.toString().padStart(2, '0')}`}</h2>
                                </section>
                                <section className='arcos t'>
                                </section>
                            </section>
                        </div>
                }
                <h6 className='mt-3 mb-5'>HOURS</h6>
            </SECT>
            <SECT className='text-center'>
                {
                    estado2
                        ? <div className='d-flex align-items-center justify-content-center estado2-2'>
                            <section>
                                <section className='arcos t'>
                                    <section className='arc-t-l'></section>
                                    <section className='arc-t-r'></section>
                                    <h2 className='fw-bold m-auto'>{`${mins.toString().padStart(2, '0')}`}</h2>
                                </section>
                                <section className='arcos b  '>
                                </section>
                            </section>
                        </div>
                        : <div className='d-flex align-items-center justify-content-center estado2'>
                            <section>
                                <section className='arcos t'>
                                    <section className='arc-t-l'></section>
                                    <section className='arc-t-r'></section>
                                    <h2 className='fw-bold m-auto'>{`${mins.toString().padStart(2, '0')}`}</h2>
                                </section>
                                <section className='arcos t'>
                                </section>
                            </section>
                        </div>
                }
                <h6 className='mt-3 mb-5'>MINUTES</h6>
            </SECT>
            <SECT className='text-center'>
                {
                    estado1
                        ? <div className='d-flex align-items-center justify-content-center estado1-2'>
                            <section>
                                <section className='arcos t'>
                                    <section className='arc-t-l'></section>
                                    <section className='arc-t-r'></section>
                                    <h2 className='fw-bold m-auto'>{`${secs.toString().padStart(2, '0')}`}</h2>
                                </section>
                                <section className='arcos b  '>
                                </section>
                            </section>
                        </div>
                        : <div className='d-flex align-items-center justify-content-center estado1'>
                            <section>
                                <section className='arcos t'>
                                    <section className='arc-t-l'></section>
                                    <section className='arc-t-r'></section>
                                    <h2 className='fw-bold m-auto'>{`${secs.toString().padStart(2, '0')}`}</h2>
                                </section>
                                <section className='arcos b'>
                                </section>
                            </section>
                        </div>
                }
                <h6 className='mt-3 mb-5'>SECONDS</h6>
            </SECT>
        </div>
    )
}
export default Temporizador;