namespace sistemaHospitalar{ export class Hospital{
     private _nome:string;
     private _codHospital:number;
     private _paciente:Array<Paciente> = [];
     private _enfermeiro:Array<Enfermeiro> = [];
     private _medico:Array<Medico> = [];


 public getNome(){
      return this._nome;
  }

  public setNome(nome:string){
      this._nome = nome;
   }
    public getCodHospital(){
         return this._codHospital;
     }

     public setCodHospital(codigo: number){
          this._codHospital = codigo;
      }

      public getPaciente(){
           return this._paciente;
       }

    public addPaciente(paciente:Paciente){
         this._paciente.push(paciente);
     }

     public getPaciente2(){
           return this._paciente;
       }

    public addPaciente2(paciente2:Paciente){
         this._paciente.push(paciente2);
     }

     public getPaciente3(){
           return this._paciente;
       }

    public addPaciente3(paciente3:Paciente){
         this._paciente.push(paciente3);
     }

     public getEnfermeiro(){
          return this._enfermeiro;
         }

      public addEnfermeiro(enfermeiro:Enfermeiro){
           this._enfermeiro.push(enfermeiro);
      }

      public getEnfermeiro2(){
          return this._enfermeiro;
         }

      public addEnfermeiro2(enfermeiro2:Enfermeiro){
           this._enfermeiro.push(enfermeiro2);
      }

      public getEnfermeiro3(){
          return this._enfermeiro;
         }

      public addEnfermeiro3(enfermeiro3:Enfermeiro){
           this._enfermeiro.push(enfermeiro3);
      }

      public getMedico(){
           return this._medico;
       }

    public addMedico(medico:Medico){
         this._medico.push(medico);
     }

     public getMedico2(){
           return this._medico;
       }

    public addMedico2(medico2:Medico){
         this._medico.push(medico2);
     }

     public getMedico3(){
           return this._medico;
       }

    public addMedico3(medico3:Medico){
         this._medico.push(medico3);
     }
    }
}
