var sistemaHospitalar;
(function (sistemaHospitalar) {
    var Hospital = /** @class */ (function () {
        function Hospital() {
            this._paciente = [];
            this._enfermeiro = [];
            this._medico = [];
        }
        Hospital.prototype.getNome = function () {
            return this._nome;
        };
        Hospital.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Hospital.prototype.getCodHospital = function () {
            return this._codHospital;
        };
        Hospital.prototype.setCodHospital = function (codigo) {
            this._codHospital = codigo;
        };
        Hospital.prototype.getPaciente = function () {
            return this._paciente;
        };
        Hospital.prototype.addPaciente = function (paciente) {
            this._paciente.push(paciente);
        };
        Hospital.prototype.getPaciente2 = function () {
            return this._paciente;
        };
        Hospital.prototype.addPaciente2 = function (paciente2) {
            this._paciente.push(paciente2);
        };
        Hospital.prototype.getPaciente3 = function () {
            return this._paciente;
        };
        Hospital.prototype.addPaciente3 = function (paciente3) {
            this._paciente.push(paciente3);
        };
        Hospital.prototype.getEnfermeiro = function () {
            return this._enfermeiro;
        };
        Hospital.prototype.addEnfermeiro = function (enfermeiro) {
            this._enfermeiro.push(enfermeiro);
        };
        Hospital.prototype.getEnfermeiro2 = function () {
            return this._enfermeiro;
        };
        Hospital.prototype.addEnfermeiro2 = function (enfermeiro2) {
            this._enfermeiro.push(enfermeiro2);
        };
        Hospital.prototype.getEnfermeiro3 = function () {
            return this._enfermeiro;
        };
        Hospital.prototype.addEnfermeiro3 = function (enfermeiro3) {
            this._enfermeiro.push(enfermeiro3);
        };
        Hospital.prototype.getMedico = function () {
            return this._medico;
        };
        Hospital.prototype.addMedico = function (medico) {
            this._medico.push(medico);
        };
        Hospital.prototype.getMedico2 = function () {
            return this._medico;
        };
        Hospital.prototype.addMedico2 = function (medico2) {
            this._medico.push(medico2);
        };
        Hospital.prototype.getMedico3 = function () {
            return this._medico;
        };
        Hospital.prototype.addMedico3 = function (medico3) {
            this._medico.push(medico3);
        };
        return Hospital;
    }());
    sistemaHospitalar.Hospital = Hospital;
})(sistemaHospitalar || (sistemaHospitalar = {}));
