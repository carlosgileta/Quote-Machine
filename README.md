# Creacion de Quote-Machine para el trabajo en Academlo 

Este proyecto cambia la cita y el nombre del autor de dicha cita, este se trae de un archvio .JSON, a lo cual se investigo como tratar dicho archivo, el uso de las
HOOKS y sus props para poder ser llamados y utilizados en otros componentes.

## Componentes
Se crearon propios componetes para cada parte del codigo, por lo cual se dividio en un componente padre que es la APP y esta su vez se dividieron en componetes hijos

#Componete principal APP
En este componete se renderizo el archivo de los demas componentes

#Container Quote
Se podria ver como un caja donde se guradan todos lso componentes necesarios, que son el componente de la cita, componente del autor.

En este componente se genero la logica necesario del JS para reutilizar
-Se realizo una funcion para poder realizar un numero Random el cual con este numero se saca la cita desde el archivo Quotes.json
-Se realiza Fucion para poder sacar la lista de colores validos pero en formato RGB, si necesitas podrias hecarle un vistazo al codigo.
-se utiliza el useState, para poder guardar los estados y cambiarlos a su vez para poder solictar del JSON los Strings necesarios para poder utilizarlos en el componente padre.
-con window.onload se muestran datos random en el QUOTE Box, cada que tu actualices la pagina

   

