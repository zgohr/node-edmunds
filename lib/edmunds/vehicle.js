
var core = require('./core');

var Vehicle = exports.Vehicle = function (api_key) {
  this.Edmunds = new core.Edmunds(api_key);
};

exports.createClient = function (api_key) {
  return new Vehicle(api_key);
};

var proto = Vehicle.prototype;

proto.getListOfMakes = function (callback) {
  return this.Edmunds.invoke('/api/vehicle-directory-ajax/findmakes', {}, callback);
};

proto.getListOfModelsByMake = function(make, callback) {
  return this.Edmunds.invoke('/api/vehicle-directory-ajax/findmakemodels', {"make": make}, callback);
};

proto.getListOfTypes = function(callback) {
  return this.Edmunds.invoke('/api/vehicle/stylerepository/findallvehicletypes', {}, callback);
};

proto.getVehicle = function(make, model, year, callback) {
  return this.Edmunds.invoke('/api/vehicle/modelyearrepository/foryearmakemodel', {"make":make, "model":model, "year":year}, callback);
};

proto.getMakes = function(callback) {
  return this.Edmunds.invoke('/api/vehicle/makerepository/findall', {}, callback);
};

proto.getMakesByYear = function(year, callback) {
  return this.Edmunds.invoke('/api/vehicle/makerepository/findmakesbymodelyear', {"year": year}, callback);
};

proto.getMakesByState = function(state, callback) {
  return this.Edmunds.invoke('/api/vehicle/makerepository/findmakesbypublicationstate', {"state": state}, callback);
};

proto.getNewMakes = function(callback) {
  return this.Edmunds.invoke('/api/vehicle/makerepository/findnewmakes', {}, callback);
};

proto.getUsedMakes = function(callback) {
  return this.Edmunds.invoke('/api/vehicle/makerepository/findusedmakes', {}, callback);
};

proto.getFutureMakes = function(callback) {
  return this.Edmunds.invoke('/api/vehicle/makerepository/findfuturemakes', {}, callback);
};

proto.getMakeById = function(id, callback) {
  return this.Edmunds.invoke('/api/vehicle/makerepository/findbyid', {"id": id}, callback);
};

proto.getMakeByName = function(name, callback) {
  return this.Edmunds.invoke('/api/vehicle/makerepository/findmakebyname', {"name": name}, callback);
};

proto.getModelsByMakeAndYear = function(make, year, callback) {
  return this.Edmunds.invoke('/api/vehicle/modelrepository/findmodelsbymakeandyear', {"make": make, "year": year}, callback);
};

proto.getModelsByMakeAndState = function(make, state, callback) {
  return this.Edmunds.invoke('/api/vehicle/modelrepository/findmodelsbymakeandpublicationstate', {"make": make, "state": state}, callback);
};

proto.getModelsByMakeId = function(id, callback) {
  return this.Edmunds.invoke('/api/vehicle/modelrepository/findbymakeid', {"makeid": id}, callback);
};

proto.getModelsByMakeName = function(name, callback) {
  return this.Edmunds.invoke('/api/vehicle/modelrepository/findmodelsbymake', {"make": name}, callback);
};

proto.getFutureModelsByMakeId = function(id, callback) {
  return this.Edmunds.invoke('/api/vehicle/modelrepository/findfuturemodelsbymakeid', {"makeId": id}, callback);
};

proto.getUsedModelsByMakeId = function(id, callback) {
  return this.Edmunds.invoke('/api/vehicle/modelrepository/findusedmodelsbymakeid', {"makeId": id}, callback);
};

proto.getNewModelsByMakeId = function(id, callback) {
    return this.Edmunds.invoke('/api/vehicle/modelrepository/findnewmodelsbymakeid', {"makeId": id}, callback);
  };

proto.getModelById = function(id, callback) {
  return this.Edmunds.invoke('/api/vehicle/modelrepository/findbyid', {"id": id}, callback);
};

proto.getModelByMakeAndModelName = function(make, model, callback) {
  return this.Edmunds.invoke('/api/vehicle/modelrepository/findmodelbymakemodelname', {"make": make, "model": model}, callback);
};

proto.getModelYearById = function(id, callback) {
  return this.Edmunds.invoke('/api/vehicle/modelyearrepository/findbyid', {"id": id}, callback);
};

proto.getListOfYearsWithNew = function(callback) {
  return this.Edmunds.invoke('/api/vehicle/modelyearrepository/finddistinctyearwithnew', {}, callback);
};

proto.getListOfYearsWithNewOrUsed = function(callback) {
  return this.Edmunds.invoke('/api/vehicle/modelyearrepository/finddistinctyearwithneworused', {}, callback);
};

proto.getListOfYearsWithUsed = function(callback) {
  return this.Edmunds.invoke('/api/vehicle/modelyearrepository/finddistinctyearwithused', {}, callback);
};

proto.getFutureModelYearsByModelId = function(modelId, callback) {
  return this.Edmunds.invoke('/api/vehicle/modelyearrepository/findfuturemodelyearsbymodelid', {"modelId": modelId}, callback);
};

proto.getModelYearsByMakeAndYear = function(make, year, callback) {
  return this.Edmunds.invoke('/api/vehicle/modelyearrepository/findmodelyearsbymakeandyear', {"make": make, "year": year}, callback);
};

proto.getModelYearsByMakeAndModel = function(make, model, callback) {
  return this.Edmunds.invoke('/api/vehicle/modelyearrepository/findmodelyearsbymakemodel', {"make": make, "model": model}, callback);
};

proto.getNewAndUsedModelYearsByMakeIdAndYear = function(makeId, year, callback) {
  return this.Edmunds.invoke('/api/vehicle/modelyearrepository/findnewandusedmodelyearsbymakeidandyear', {"makeid": makeId, "year": year}, callback);
};

proto.getNewModelYearsByModelId = function(modelId, callback) {
  return this.Edmunds.invoke('/api/vehicle/modelyearrepository/findnewmodelyearsbymodelid', {"modelId": modelId}, callback);
};

proto.getUsedModelYearsByModelId = function(modelId, callback) {
  return this.Edmunds.invoke('/api/vehicle/modelyearrepository/findusedmodelyearsbymodelid', {"modelId": modelId}, callback);
};

proto.getModelYearsByCatAndState = function(category, state, callback) {
  return this.Edmunds.invoke('/api/vehicle/modelyearrepository/findyearsbycategoryandpublicationstate', {"category": category, "state": state}, callback);
};

proto.getModelYearsByModelId = function(modelId, callback) {
  return this.Edmunds.invoke('/api/vehicle/modelyearrepository/formodelid', {"modelid": modelId}, callback);
};
