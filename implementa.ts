
///<reference path="pessoa.ts"/>
///<reference path="paciente.ts"/>
///<reference path="funcionario.ts"/>
///<reference path="hospital.ts"/>

namespace sistemaHospitalar{
     let hospital = new Hospital();
     hospital.setNome("Albert Einstein");
     hospital.setCodHospital(33);

     //paciente
    let paciente = new Paciente();
    paciente.setNome("Bruna Yumi");
    paciente. setCodPaciente(2);
    paciente. setHospital(hospital);

     let paciente2 = new Paciente();
    paciente2.setNome("Silva Shirakawa");
    paciente2. setCodPaciente(2);
    paciente2. setHospital(hospital);

     let paciente3 = new Paciente();
    paciente3.setNome("Yumi da Silva");
    paciente3. setCodPaciente(3);
    paciente3. setHospital(hospital);

    //medico
    let medico = new Medico();
    medico.setNome("Dr.Hanz Chucrute");
    medico.setCodMedico(1);
    medico.setCrm("1234567-SP");
    medico. setEspecialidade("Pediatra");
    medico. setHospital(hospital);

     let medico2 = new Medico();
    medico2.setNome("Dr.Dre");
    medico2.setCodMedico(2);
    medico2.setCrm("1234567-SP");
    medico2. setEspecialidade("Beat Maker");
    medico2. setHospital(hospital);

    let medico3 = new Medico();
    medico3.setNome("Dr.Stephen Strange");
    medico3.setCodMedico(3);
    medico3.setCrm("1234567-SP");
    medico3. setEspecialidade("Magia Negra");
    medico3. setHospital(hospital);

    let enfermeiro = new Enfermeiro();
    enfermeiro.setNome("Tony");
    enfermeiro.setCoren("123456-SP");


     let enfermeiro2 = new Enfermeiro();
    enfermeiro2.setNome("Bruce");
    enfermeiro2.setCoren("123456-SP");

     let enfermeiro3 = new Enfermeiro();
    enfermeiro3.setNome("Wayne");
    enfermeiro3.setCoren("123456-SP");

    //medico
    document.getElementById("crm").textContent = medico.getCrm();
    document.getElementById("especialidade").textContent = medico.getEspecialidade();

    //paciente
    document.getElementById("codPaciente").textContent = paciente.getCodPaciente();


    //enfermeiro
    document.getElementById("coren").textContent = enfermeiro.getCodCoren();

    hospital. addMedico(medico);
    hospital. addMedico2(medico2);
    hospital. addMedico3(medico3);

     hospital. addPaciente(medico);
    hospital. addPaciente2(medico2);
    hospital. addPaciente3(medico3);

     hospital. addEnfermeiro(medico);
    hospital. addEnfermeiro2(medico2);
    hospital. addEnfermeiro3(medico3);


    //trecho inserido para exemplificar a implentacao das tabelas
    let tabela = document.getElementById("tabela");

    let conteudo = " <tr> <th>Paciente</th> <th>Hospital</th> </tr>";
    hospital.getPaciente().forEach(element => {
        conteudo += "<tr> <td>"+element.getNome()+"</td><td>"+ element.getHospital().getNome()+"</td></tr>";
    });
    tabela.innerHTML = conteudo;
    }
