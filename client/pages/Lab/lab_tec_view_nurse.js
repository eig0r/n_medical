
  Meteor.subscribe('LabReq');

Template.lab_tec_view_nurse.helpers({
  getlabReq: function() {
var Req_id= FlowRouter.getParam('id');
    return LabReq.findOne({mangmentId:Req_id},{sort:{createdAt: -1}});
  },
  FBSUGAR: function (type) {return (this && this.FBSUGAR === type) ? 'checked' : null;},
  PPBSugar: function (type) {return (this && this.PPBSugar === type) ? 'checked' : null;},
  RandumBSugar: function (type) {return (this && this.RandumBSugar === type) ? 'checked' : null;},
  Urea: function (type) {return (this && this.Urea === type) ? 'checked' : null;},
  Creatinine: function (type) {return (this && this.Creatinine === type) ? 'checked' : null;},
  CreatinineClearance: function (type) {return (this && this.CreatinineClearance === type) ? 'checked' : null;},
  UricAcid: function (type) {return (this && this.UricAcid === type) ? 'checked' : null;},
  CholesterolTotal: function (type) {return (this && this.CholesterolTotal === type) ? 'checked' : null;},
  HDLCholesterol: function (type) {return (this && this.HDLCholesterol === type) ? 'checked' : null;},
  LDLCholesterol: function (type) {return (this && this.LDLCholesterol === type) ? 'checked' : null;},
  Triglycerides: function (type) {return (this && this.Triglycerides === type) ? 'checked' : null;},
  Calcium: function (type) {return (this && this.Calcium === type) ? 'checked' : null;},
  Phosphorus: function (type) {return (this && this.Phosphorus === type) ? 'checked' : null;},
  NaK: function (type) {return (this && this.NaK === type) ? 'checked' : null;},
  TotalBilirubin: function (type) {return (this && this.TotalBilirubin === type) ? 'checked' : null;},
  DirectBilirubin: function (type) {return (this && this.DirectBilirubin === type) ? 'checked' : null;},

  ALT: function (type) {return (this && this.ALT === type) ? 'checked' : null;},
  AST: function (type) {return (this && this.AST === type) ? 'checked' : null;},
  AIKPase: function (type) {return (this && this.AIKPase === type) ? 'checked' : null;},
  GGT: function (type) {return (this && this.GGT === type) ? 'checked' : null;},
  TotalProteins: function (type) {return (this && this.TotalProteins === type) ? 'checked' : null;},
  Albumin: function (type) {return (this && this.Albumin === type) ? 'checked' : null;},
  AGRatio: function (type) {return (this && this.AGRatio === type) ? 'checked' : null;},
  Amylase: function (type) {return (this && this.Amylase === type) ? 'checked' : null;},
  LDH: function (type) {return (this && this.LDH === type) ? 'checked' : null;},
  CPK: function (type) {return (this && this.CPK === type) ? 'checked' : null;},
  CKMB: function (type) {return (this && this.CKMB === type) ? 'checked' : null;},
  Acidpase: function (type) {return (this && this.Acidpase === type) ? 'checked' : null;},
  Hbperc: function (type) {return (this && this.Hbperc === type) ? 'checked' : null;},
  ESR: function (type) {return (this && this.ESR === type) ? 'checked' : null;},
  Bloodpicture: function (type) {return (this && this.Bloodpicture === type) ? 'checked' : null;},
  Reticulocytes: function (type) {return (this && this.Reticulocytes === type) ? 'checked' : null;},
  Platelets: function (type) {return (this && this.Platelets === type) ? 'checked' : null;},
  Bloodgroup: function (type) {return (this && this.Bloodgroup === type) ? 'checked' : null;},

  RhFactor: function (type) {return (this && this.RhFactor === type) ? 'checked' : null;},
  DirectCoombs: function (type) {return (this && this.DirectCoombs === type) ? 'checked' : null;},
  IndirectCoombs: function (type) {return (this && this.IndirectCoombs === type) ? 'checked' : null;},
  OsmoticFragility: function (type) {return (this && this.OsmoticFragility === type) ? 'checked' : null;},
  G6PD: function (type) {return (this && this.G6PD === type) ? 'checked' : null;},
  BleedingTime: function (type) {return (this && this.BleedingTime === type) ? 'checked' : null;},
  ClottingTime: function (type) {return (this && this.ClottingTime === type) ? 'checked' : null;},
  ProthrombinTime: function (type) {return (this && this.ProthrombinTime === type) ? 'checked' : null;},

    ApTT: function (type) {return (this && this.ApTT === type) ? 'checked' : null;},
      Serumiron: function (type) {return (this && this.Serumiron === type) ? 'checked' : null;},
        TIBC: function (type) {return (this && this.TIBC === type) ? 'checked' : null;},
          Hbelectrophcresis: function (type) {return (this && this.Hbelectrophcresis === type) ? 'checked' : null;},
            CultureSensitivity: function (type) {return (this && this.CultureSensitivity === type) ? 'checked' : null;},
              For: function (type) {return (this && this.For === type) ? 'checked' : null;},
                BloodCulture: function (type) {return (this && this.BloodCulture === type) ? 'checked' : null;},

    FilmForTB: function (type) {return (this && this.FilmForTB === type) ? 'checked' : null;},
    CultureforTB: function (type) {return (this && this.CultureforTB === type) ? 'checked' : null;},
    Widal: function (type) {return (this && this.Widal === type) ? 'checked' : null;},
    Brucella: function (type) {return (this && this.Brucella === type) ? 'checked' : null;},
    RheumatoidF: function (type) {return (this && this.RheumatoidF === type) ? 'checked' : null;},
    ASOT: function (type) {return (this && this.ASOT === type) ? 'checked' : null;},
    CRProtein: function (type) {return (this && this.CRProtein === type) ? 'checked' : null;},
    ANA: function (type) {return (this && this.ANA === type) ? 'checked' : null;},
    MonospostTest: function (type) {return (this && this.MonospostTest === type) ? 'checked' : null;},
    RPR: function (type) {return (this && this.RPR === type) ? 'checked' : null;},
    HIV: function (type) {return (this && this.HIV === type) ? 'checked' : null;},
    HCVAB: function (type) {return (this && this.HCVAB === type) ? 'checked' : null;},

        HBSAG: function (type) {return (this && this.HBSAG === type) ? 'checked' : null;},
            urineanalysis: function (type) {return (this && this.urineanalysis === type) ? 'checked' : null;},
                Stoolanalysis: function (type) {return (this && this.Stoolanalysis === type) ? 'checked' : null;},
                    Semenanalysis: function (type) {return (this && this.Semenanalysis === type) ? 'checked' : null;},
  Pregnancytest: function (type) {return (this && this.Pregnancytest === type) ? 'checked' : null;},
  BenceJonesP: function (type) {return (this && this.BenceJonesP === type) ? 'checked' : null;},
  Proteinelectrophcresis: function (type) {return (this && this.Proteinelectrophcresis === type) ? 'checked' : null;},
  Caffeine: function (type) {return (this && this.Caffeine === type) ? 'checked' : null;},
  lipoproteinelec: function (type) {return (this && this.lipoproteinelec === type) ? 'checked' : null;},
  T3T4: function (type) {return (this && this.T3T4 === type) ? 'checked' : null;},
  Bloodgases: function (type) {return (this && this.Bloodgases === type) ? 'checked' : null;}



});
