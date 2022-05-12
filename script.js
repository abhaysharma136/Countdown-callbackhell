var CenterDiv= document.querySelectorAll('.center1')[0];


const countdown1=(callback)=>{
   CenterDiv.innerHTML="10"
    setTimeout(()=>{
        CenterDiv.innerHTML="9";
        callback();
    },1000)
}

const countdown2=(callback)=>{
    setTimeout(()=>{
        CenterDiv.innerHTML="8";
        callback();
    },1000)
}
const countdown3=(callback)=>{
    setTimeout(()=>{
        CenterDiv.innerHTML="7";
        callback();
    },1000)
}
const countdown4=(callback)=>{
    setTimeout(()=>{
        CenterDiv.innerHTML="6";
        callback();
    },1000)
}
const countdown5=(callback)=>{
    setTimeout(()=>{
        CenterDiv.innerHTML="5";
        callback();
    },1000)
}
const countdown6=(callback)=>{
    setTimeout(()=>{
        CenterDiv.innerHTML="4";
        callback();
    },1000)
}
const countdown7=(callback)=>{
    setTimeout(()=>{
        CenterDiv.innerHTML="3";
        callback();
    },1000)
}
const countdown8=(callback)=>{
    setTimeout(()=>{
        CenterDiv.innerHTML="2";
        callback();
    },1000)
}
const countdown9=(callback)=>{
    setTimeout(()=>{
        CenterDiv.innerHTML="1";
        callback();
    },1000)
}

const countdown10=(callback)=>{
    setTimeout(()=>{
        callback();
    },1000)
}


countdown1(()=>{
    countdown2(()=>{
        countdown3(()=>{
            countdown4(()=>{
                countdown5(()=>{
                    countdown6(()=>{
                        countdown7(()=>{
                            countdown8(()=>{
                                countdown9(()=>{
                                    countdown10(()=>{
                                        CenterDiv.innerHTML="Happy Independence Day";
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
