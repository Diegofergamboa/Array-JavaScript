//! Algoritmo para ver si se cruzan las fechas.

const dates = [
    {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
    },
    {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
    },
    {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
    },
];
const newAppiinment = {
    startDate: new Date(2021,1,1,19),
    endDate: new Date(2021,1,1,20,30),
};
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverLap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping (
            {start: date.startDate , end: date.endDate},
            {start: newDate.startDate , end: newData.endDate},
        )
    })
}

console.log(isOverLap(newAppiinment));