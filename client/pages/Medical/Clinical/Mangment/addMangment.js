Meteor.subscribe('PersonalHistory');
Meteor.subscribe('Examination');
Meteor.subscribe('mangment');
Meteor.subscribe('Medication');
Meteor.subscribe('PatientInfo');
Meteor.subscribe('Reservat');
Meteor.subscribe('LabReq');
Meteor.subscribe('Reservation');

Meteor.subscribe('Transfer');



Template.addMangment.events({
  'submit .add-Bill-info ':function (event ,result ) {
     event.preventDefault();
     var patientId= Session.get('id');
     var Dignoses= '';
     var nurse_name='';




     document.getElementById("buttonSave").disabled = false;
     document.getElementById("add-medication-info").disabled = false;
     var date = new Date();
Mangment.insert({
        patientId: patientId,
        Dignoses: Dignoses,
nurse_name:nurse_name,
Dr_name:'attendant_surgent',
        createdAt:moment(date).format("MM/DD/YYYY"),
        userId:Meteor.userId()
      }, function (error, result) {

    var getmangmentid = result;
     Session.set('mangmentId',getmangmentid);
  //  console.log(getmangmentid)
      });
 return false;

    Transfer.insert({
              patientId: patientId,
              Dignoses: Dignoses,


              createdAt:moment(date).format("MM/DD/YYYY"),
              userId:Meteor.userId()
            }, function (error, result) {

          var getmangmentid = result;
           Session.set('mangmentId',getmangmentid);
          console.log(getmangmentid)
            });

       return false;
}

  });





Template.addMangment.helpers({
  mdata: function() {
    var id= FlowRouter.getParam('id');

    Session.set('id',id);
    return PatientInfo.findOne({_id:id});
  },
  drname: function() {
    var drId=Session.get('userID');
    return Doctors.findOne({ dr_Id : drId });
  }


});




//add midication

Template.addMangment.events({
  'click #add-medication-info':function (event) {
     event.preventDefault();
     var patientId=Session.get('id');
       var mangmentId= Session.get('mangmentId');

       var medication = document.getElementById("medication").value;
       var medicationComment = document.getElementById("medicationComment").value;


    Medication.insert({
        patientId: patientId,
        mangmentId: mangmentId,
        medication: medication,
        medicationComment: medicationComment

      });
        //event.target.Dignoses.value= '';
      //  event.target.Invistigations.value= '';
      //  event.target.Comment.value= '';
       return false;

}

  });

// Medication Table

Template.addMangment.helpers({
  medicationtview: function() {
    var patientId=Session.get('id');
     var mangmentId= Session.get('mangmentId');

    return Medication.find({mangmentId:mangmentId});
  }
});

    Template.addMangment.events({
      'click #buttonSave': function(event){
   var mangmentId= Session.get('mangmentId');
   var Dignoses = document.getElementById("Dignoses").value;
    var nurse_name = document.getElementById("nurse_name").value;
  var patientId=Session.get('id');

   //var medicationComment = document.getElementById("medicationComment").value;
   document.getElementById("buttonSave").disabled = true;
    document.getElementById("add-medication-info").disabled = true;
var reservation_id=Session.get('reservation_id');
    Mangment.update({_id:mangmentId},
      {$set:{Dignoses: Dignoses ,nurse_name:nurse_name}});

      Reservation.update({_id:reservation_id},
        {$set:{nurse_name:nurse_name}});

FlowRouter.go('/mangment');
           return false;

    }


  });
        //event.target.Dignoses.value= '';
      //  event.target.Invistigations.value= '';
      //  event.target.Comment.value= '';
      Template.addMangment.events({
        'submit .insert-lab-req':function (event,template) {
           event.preventDefault();
                      var patientId= Session.get('Patienttest');
                      var mangmentId= Session.get('mangmentId');
                      var userid= Session.get('userID');
                      var date = new Date();

                      var patient_name = document.getElementById("patient_name").value;
                      var lab_notes = document.getElementById("lab_notes").value;
                      var DrName=document.getElementById("drname").value;

                      var FBSUGAR = template.find('input:checkbox[name=FBSUGAR]:checked');
                      var PPBSugar = template.find('input:checkbox[name=PPBSugar]:checked');
                      var RandumBSugar = template.find('input:checkbox[name=RandumBSugar]:checked');
                      var Urea = template.find('input:checkbox[name=Urea]:checked');
                      var Creatinine = template.find('input:checkbox[name=Creatinine]:checked');
                      var CreatinineClearance = template.find('input:checkbox[name=CreatinineClearance]:checked');
                      var UricAcid = template.find('input:checkbox[name=UricAcid]:checked');
                      var CholesterolTotal = template.find('input:checkbox[name=CholesterolTotal]:checked');

                      var HDLCholesterol = template.find('input:checkbox[name=HDLCholesterol]:checked');
                      var LDLCholesterol = template.find('input:checkbox[name=LDLCholesterol]:checked');
                      var Triglycerides = template.find('input:checkbox[name=Triglycerides]:checked');
                      var Calcium = template.find('input:checkbox[name=Calcium]:checked');
                      var Phosphorus = template.find('input:checkbox[name=Phosphorus]:checked');
                      var NaK = template.find('input:checkbox[name=NaK]:checked');
                      var TotalBilirubin = template.find('input:checkbox[name=TotalBilirubin]:checked');

                      var DirectBilirubin = template.find('input:checkbox[name=DirectBilirubin]:checked');
                      var ALT = template.find('input:checkbox[name=ALT]:checked');
                      var AST = template.find('input:checkbox[name=AST]:checked');
                      var AIKPase = template.find('input:checkbox[name=AIKPase]:checked');
                      var GGT = template.find('input:checkbox[name=GGT]:checked');
                      var TotalProteins = template.find('input:checkbox[name=TotalProteins]:checked');
                      var Albumin = template.find('input:checkbox[name=Albumin]:checked');
                      var AGRatio = template.find('input:checkbox[name=AGRatio]:checked');
                      var Amylase = template.find('input:checkbox[name=Amylase]:checked');

                      var LDH = template.find('input:checkbox[name=LDH]:checked');
                      var CPK = template.find('input:checkbox[name=CPK]:checked');
                      var CKMB = template.find('input:checkbox[name=CKMB]:checked');
                      var Acidpase = template.find('input:checkbox[name=Acidpase]:checked');
                      var Hbperc = template.find('input:checkbox[name=Hbperc]:checked');
                      var ESR = template.find('input:checkbox[name=ESR]:checked');
                      var Bloodpicture = template.find('input:checkbox[name=Bloodpicture]:checked');
                      var Reticulocytes = template.find('input:checkbox[name=Reticulocytes]:checked');
                      var Platelets = template.find('input:checkbox[name=Platelets]:checked');
                      var Bloodgroup = template.find('input:checkbox[name=Bloodgroup]:checked');
                      var RhFactor = template.find('input:checkbox[name=RhFactor]:checked');
                      var DirectCoombs = template.find('input:checkbox[name=DirectCoombs]:checked');


                      var IndirectCoombs = template.find('input:checkbox[name=IndirectCoombs]:checked');
                      var OsmoticFragility = template.find('input:checkbox[name=OsmoticFragility]:checked');
                      var G6PD = template.find('input:checkbox[name=G6PD]:checked');
                      var BleedingTime = template.find('input:checkbox[name=BleedingTime]:checked');
                      var ClottingTime = template.find('input:checkbox[name=ClottingTime]:checked');
                      var ProthrombinTime = template.find('input:checkbox[name=ProthrombinTime]:checked');
                      var ApTT = template.find('input:checkbox[name=ApTT]:checked');
                      var Serumiron = template.find('input:checkbox[name=Serumiron]:checked');
                      var TIBC = template.find('input:checkbox[name=TIBC]:checked');
                      var Hbelectrophcresis = template.find('input:checkbox[name=Hbelectrophcresis]:checked');

                      var CultureSensitivity = template.find('input:checkbox[name=CultureSensitivity]:checked');
                      var For = template.find('input:checkbox[name=For]:checked');
                      var BloodCulture = template.find('input:checkbox[name=BloodCulture]:checked');
                      var FilmForTB = template.find('input:checkbox[name=FilmForTB]:checked');
                      var CultureforTB = template.find('input:checkbox[name=CultureforTB]:checked');
                      var Widal = template.find('input:checkbox[name=Widal]:checked');
                      var Brucella = template.find('input:checkbox[name=Brucella]:checked');
                      var RheumatoidF = template.find('input:checkbox[name=RheumatoidF]:checked');
                      var ASOT = template.find('input:checkbox[name=ASOT]:checked');
                      var CRProtein = template.find('input:checkbox[name=CRProtein]:checked');

                      var ANA = template.find('input:checkbox[name=ANA]:checked');
                      var MonospostTest = template.find('input:checkbox[name=MonospostTest]:checked');
                      var RPR = template.find('input:checkbox[name=RPR]:checked');
                      var HIV = template.find('input:checkbox[name=HIV]:checked');
                      var HCVAB = template.find('input:checkbox[name=HCVAB]:checked');
                      var HBSAG = template.find('input:checkbox[name=HBSAG]:checked');
                      var urineanalysis = template.find('input:checkbox[name=urineanalysis]:checked');
                      var Stoolanalysis = template.find('input:checkbox[name=Stoolanalysis]:checked');
                      var Semenanalysis = template.find('input:checkbox[name=Semenanalysis]:checked');
                      var Pregnancytest = template.find('input:checkbox[name=Pregnancytest]:checked');

                      var BenceJonesP = template.find('input:checkbox[name=BenceJonesP]:checked');
                      var Proteinelectrophcresis = template.find('input:checkbox[name=Proteinelectrophcresis]:checked');
                      var Caffeine = template.find('input:checkbox[name=Caffeine]:checked');
                      var lipoproteinelec = template.find('input:checkbox[name=lipoproteinelec]:checked');
                      var T3T4 = template.find('input:checkbox[name=T3T4]:checked');
                      var Bloodgases = template.find('input:checkbox[name=Bloodgases]:checked');
                      



             LabReq.insert({
                      patientId:patientId,
                      patient_name,patient_name,
                      mangmentId:mangmentId,
                      FBSUGAR:$(FBSUGAR).val(),
                      PPBSugar:$(PPBSugar).val(),

                      RandumBSugar:$(RandumBSugar).val(),
                      Urea:$(Urea).val(),
                      Creatinine:$(Creatinine).val(),
                      CreatinineClearance:$(CreatinineClearance).val(),
                      UricAcid:$(UricAcid).val(),
                      CholesterolTotal:$(CholesterolTotal).val(),

                      HDLCholesterol:$(HDLCholesterol).val(),
                      LDLCholesterol:$(LDLCholesterol).val(),
                      Triglycerides:$(Triglycerides).val(),
                      Calcium:$(Calcium).val(),
                      Phosphorus:$(Phosphorus).val(),
                      NaK:$(NaK).val(),
                      TotalBilirubin:$(TotalBilirubin).val(),

                      DirectBilirubin:$(DirectBilirubin).val(),
                      ALT:$(ALT).val(),
                      AST:$(AST).val(),
                      AIKPase:$(AIKPase).val(),
                      GGT:$(GGT).val(),
                      TotalProteins:$(TotalProteins).val(),
                      AGRatio:$(AGRatio).val(),
                      Amylase:$(Amylase).val(),

                      LDH:$(LDH).val(),
                      CPK:$(CPK).val(),
                      CKMB:$(CKMB).val(),
                      Acidpase:$(Acidpase).val(),
                      Hbperc:$(Hbperc).val(),
                      ESR:$(ESR).val(),
                      Bloodpicture:$(Bloodpicture).val(),
                      Reticulocytes:$(Reticulocytes).val(),
                      Platelets:$(Platelets).val(),
                      Bloodgroup:$(Bloodgroup).val(),
                      DirectCoombs:$(DirectCoombs).val(),
                      RhFactor:$(RhFactor).val(),


                      IndirectCoombs:$(IndirectCoombs).val(),
                      OsmoticFragility:$(OsmoticFragility).val(),
                      G6PD:$(G6PD).val(),
                      BleedingTime:$(BleedingTime).val(),
                      ProthrombinTime:$(ProthrombinTime).val(),
                      ClottingTime:$(ClottingTime).val(),
                      ApTT:$(ApTT).val(),
                      Serumiron:$(Serumiron).val(),
                      TIBC:$(TIBC).val(),
                      Hbelectrophcresis:$(Hbelectrophcresis).val(),

                        CultureSensitivity:$(CultureSensitivity).val(),
                          For:$(For).val(),
                            BloodCulture:$(BloodCulture).val(),
                              FilmForTB:$(FilmForTB).val(),
                                CultureforTB:$(CultureforTB).val(),
                                  Widal:$(Widal).val(),
                                    Brucella:$(Brucella).val(),
                                      RheumatoidF:$(RheumatoidF).val(),
                                        ASOT:$(ASOT).val(),
                                          CRProtein:$(CRProtein).val(),
                                            ANA:$(ANA).val(),
                                              MonospostTest:$(MonospostTest).val(),
                                                RPR:$(RPR).val(),
                                                  HIV:$(HIV).val(),
                                                    HCVAB:$(HCVAB).val(),
                                                      HBSAG:$(HBSAG).val(),
                                                        urineanalysis:$(urineanalysis).val(),
                                                          Stoolanalysis:$(Stoolanalysis).val(),
                                                            Semenanalysis:$(Semenanalysis).val(),

                                                              Pregnancytest:$(Pregnancytest).val(),
                                                                BenceJonesP:$(BenceJonesP).val(),
                                                                  Proteinelectrophcresis:$(Proteinelectrophcresis).val(),
                                                                    Caffeine:$(Caffeine).val(),
                                                                      lipoproteinelec:$(lipoproteinelec).val(),

                                                                        T3T4:$(T3T4).val(),

                                                                          Bloodgases:$(Bloodgases).val(),





                      lab_notes:lab_notes,
                      date:date,
                      doctorId:userid,
                      DrName:DrName,
                      status:'waiting Lab Result'
               });
                return false;
}
});
  Template.searchnurse.rendered = function () {
    AutoCompletion.init("input#searchBox");
  }

  Template.searchnurse.events = {
    'keyup input#searchBox': function () {
      AutoCompletion.autocomplete({
        element: 'input#searchBox',       // DOM identifier for the element
        collection: Doctors,              // MeteorJS collection object
        field: 'drname',                    // Document field name to search for
        limit: 5,
                        // Max number of elements to show
        sort: { name: 1 }});
                   // Sort object to filter results with
        //filter: { 'gender': 'female' }}); // Additional filtering
    }
  }
