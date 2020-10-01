<script>
  import FullCalendar from "svelte-fullcalendar";
  import dayGridPlugin from "@fullcalendar/daygrid";
  import interactionPlugin from "@fullcalendar/interaction";
  import timeGridPlugin from "@fullcalendar/timegrid";
  import listPlugin from "@fullcalendar/list";
  import esLocale from "@fullcalendar/core/locales/es";
  import globalStore from "../stores/globalStore";

  let options = {
    height: "100vh",
    initialView: "timeGridTwoDay",
    handleWindowResize: true,
    windowResizeDelay: 0,
    locale: esLocale,
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    headerToolbar: {
      // configurar los botones que aparecen en el header
      // link: https://fullcalendar.io/docs/custom-view-with-js
      // cambiar botones al navbar con el link de arriba
      left: "prev,next today",
      right: "timeGridTwoDay,timeGridWeek,timeGridDay,listWeek",
    },
    views: {
      // creanmos nuestro boton personalizado
      timeGridTwoDay: {
        type: "timeGrid",
        duration: { days: 2 },
        buttonText: "2 días",
      },
    },
    initialDate: "2020-09-12",
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: [
      {
        title: "Hacer deberes",
        start: "2020-09-01",
        
      },
      {
        title: "Sesion Veterinario Plaza españa",
        start: "2020-09-07",
        end: "2020-09-09",
      },
      {
        groupId: 999,
        title: "Esto es un evento repetido",
        start: "2020-09-09T16:00:00",
      },
      {
        groupId: 999,
        title: "Esto es un evento repetido",
        start: "2020-09-16T16:00:00",
      },
      {
        title: "Conferencia",
        start: "2020-09-11",
        end: "2020-09-13",
      },
      {
        title: "Meet con Matias",
        start: "2020-09-12T10:30:00",
        end: "2020-09-12T12:30:00",
        backgroundColor: "rgb(232 141 202)",
        borderColor:"rgb(232 141 202)"
      },
      {
        title: "Lunch",
        start: "2020-09-12T12:00:00",
        backgroundColor: "rgb(115 208 189)",
        borderColor:"rgb(115 208 189)"
      },
      {
        title: "Meet con Matias",
        start: "2020-09-12T14:30:00",
        backgroundColor: "rgb(214 103 81)",
        borderColor:"rgb(214 103 81)"
      },
      {
        title: "Comprar Azucar",
        start: "2020-09-12T17:30:00",
        backgroundColor: "#6b409e",
        borderColor:"#6b409e"
      },
      {
        title: "Sacar al perro",
        start: "2020-09-12T20:00:00",
        backgroundColor: "#3788d8",
        borderColor:"#3788d8"
      },
      {
        title: "Cita medico",
        start: "2020-09-13T07:00:00",
        backgroundColor: "rgb(245 226 48)",
        borderColor:"rgb(245 226 48)"
      },
      {
        title: "Esto es un link!",
        url: "http://google.com/",
        start: "2020-09-28",
      },
    ],
    eventColor: "white",
    eventTextColor: "rgb(250 250 250)",
    eventDisplay: "list-item", //cambia a tipo lista en el apartado de " toto el dia"
    displayEventEnd: true, 

    allDaySlot:false, //oculta la seccion del todo el dia. Al hacer esto se bugea las horas y el numero 16.
    //VISTA DE CUUADRICULA:

    /* slotDuration: "00:05:00",
    slotLabelInterval: "00:30", */
    slotLabelFormat: {
      hour: "numeric",
      minute: "2-digit",
      omitZeroMinute: false, // Cambiar de 3pm a 13:00 por ejemplo
      meridiem: "short",
    },
    scrollTime: "05:30:00", // Hara scroll autamaticamente a la hora que le indiquemos
    slotLabelClassNames: "horas", //hay que llamarlo por :global() de momento* INVESTIGAR+

    // VISTA DE LA LISTA
    noEventsClassNames: "no_evento_lista",
    noEventsContent: `No hay eventos que mostrar el ${$globalStore.fechaActual}`,
  };
</script>

<style>
  :global(.horas) {
    /* color: tomato;
    background-color: turquoise; */
  }
  :global(.fc .fc-timegrid-slot-label) {
    border: 1px solid transparent;
    position: relative;
  }

  :global(.fc .fc-timegrid-slot-label-cushion) {
    position: absolute;
    top: -10px;
    padding: 0 10px !important;
    right: 0;
    font-size: 12px;
  }
  :global(.fc-timegrid-slots tr:first-child .fc-timegrid-slot-label-cushion) {
    position: absolute;
    top: -2px;
    padding: 0 10px !important;
    right: 0;
    font-size: 12px;
  }
  :global(.fc-direction-ltr .fc-timegrid-col-events) {
    margin: 0 2.5% 0 0px !important;
  }
  :global(.fc-timegrid-slots tr:nth-child(1n)) {
    border: 1px solid transparent;
  }
  :global(.fc-timegrid-slots tr:nth-child(1n) .fc .fc-timegrid-slot-label) {
    position: relative;
  }
  :global(.fc-timegrid-slots tr .fc-timegrid-slot-label) {
    background-color: #bbbbbb;
  }
  :global(.fc-timegrid-slots
      tr:nth-child(2n + 1)
      > .fc-timegrid-slot-label::before) {
    content: "";
    position: absolute;
    top: -1px;
    right: 0;
    height: 1px;
    width: 8px;
    background-color: #ddd;
  }
  :global(.fc-timegrid-slot-lane) {
    border: 1px solid transparent !important;
    background: linear-gradient(
      90deg,
      rgb(93 165 88) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgb(93 165 88) 100%
    );
  }
  :global(.fc table){
    border-collapse: initial!important;
  }
</style>

<FullCalendar {options} />
