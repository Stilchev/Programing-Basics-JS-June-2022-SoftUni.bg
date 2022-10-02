function projectsCreation(input){
    let name = input[0];
    let projects = input[1];
    let hoursPerProject = projects * 3;
    console.log(`The architect ${name} will need ${hoursPerProject} hours to complete ${projects} project/s.`);

}
projectsCreation(["George ",
"4 "])
projectsCreation(["Sanya ",
"9 "])