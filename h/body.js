const square = document.getElementById("ff");

square.animate([
    {
        transform: "translateX(0)",
        opacity: 1,
    },
    {
        transform: "translateX(100px)",
        opacity: 0.25,

    }
],
{
    duration: 2000,
}
);

