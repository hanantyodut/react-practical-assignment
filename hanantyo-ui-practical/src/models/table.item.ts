export type TItem = {
	vehicleId: string;
	vehicleType: VehicleType;
	condition: Condition;
	currSpeed: number;
	batteryLv: number;
	vehicleStat: VehicleStat;
	location: string;
	updated_at: Date;
};

export enum VehicleType {
	scooter = "Scooter",
	highEnd = "High-End",
	lowRider = "Low-Rider",
}

export enum Condition {
	lock = "Lock",
	unlock = "Unlock",
}

export enum VehicleStat {
	parking = "PARKING",
	moving = "MOVING",
	idling = "IDLING",
	towing = "TOWING",
}
