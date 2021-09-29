/* Try nos permite eecutar un codigo propenso a fallar de una manera
    segura
 */

    const gravedad = 9.8
    console.log(gravedad);

/* Intenta ejecutar el codigo, si hay error ejecuta el catch */
    try {
    gravedad = 10.1;

    }catch(error) {
        /* El catch se ejecuta si hay un error, recibe como primer parametro
        el error */
    console.log(error);
    } finally {
        /* El finally siempre se ejecuta */
    console.log('Soy el finaly');
    }

    console.log(gravedad);