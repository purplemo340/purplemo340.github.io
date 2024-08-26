fetch("names.ejs").then(async res => {
    const resText = await res.text();
    document.getElementById("target").innerHTML = ejs.render(resText, {names: ["Corey", "Austin", "Sharon", "Justin"] }); 
  })