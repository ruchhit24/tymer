 after setting value from the input, to the state variable hr, min,sec
 nxt step is ki hme track krni h inki value, jese jese change ho, to useEffect lgayenge,jisme dependencies lgayenge isStart,hr,min,sec inke change hone pe useEffect ko invoke krenge
 iske andr hm setInterval lgayenge, jo ki hr 1sec me chalega,aur isse timr id ko lelenge , aur ye function tabhi chale jb isStart ki value true h tabhi
 timer id ko ek state variable me store krlenge, jb hm pause krenge tb iski need lgagegi
 jese jese tym chalta rahega useEffect me, to hm iske value set krte rhenge
 ab main logic => user ki values h jo input me thi hr, min,sec 
 jo sec h wo 1 se decrement hona chahiye, jb ye 0 pe aye tb minutes wala ek se decrement ho, aur sec 59 se reset ho jana chahiye