// import { TableProps } from "antd";
import { TableProps } from "antd";
import {
	Condition,
	TItem,
	VehicleStat,
	VehicleType,
} from "../models/table.item";

export const data: TItem[] = [
	{
		vehicleId: "132456",
		vehicleType: VehicleType.scooter,
		condition: Condition.lock,
		currSpeed: 0,
		batteryLv: 100,
		vehicleStat: VehicleStat.parking,
		location: "3.142,012",
		updated_at: new Date("2019-07-02T09:00:00"),
	},
	{
		vehicleId: "987654",
		vehicleType: VehicleType.scooter,
		condition: Condition.unlock,
		currSpeed: 5,
		batteryLv: 75,
		vehicleStat: VehicleStat.moving,
		location: "2.125,114",
		updated_at: new Date("2019-07-02T10:00:00"),
	},
	{
		vehicleId: "569825",
		vehicleType: VehicleType.scooter,
		condition: Condition.unlock,
		currSpeed: 0,
		batteryLv: 50,
		vehicleStat: VehicleStat.idling,
		location: "4.125,114",
		updated_at: new Date("2019-07-02T10:00:00"),
	},
	{
		vehicleId: "125864",
		vehicleType: VehicleType.scooter,
		condition: Condition.lock,
		currSpeed: 0,
		batteryLv: 15,
		vehicleStat: VehicleStat.towing,
		location: "5.125,114",
		updated_at: new Date("2019-07-02T10:00:00"),
	},
	{
		vehicleId: "125864",
		vehicleType: VehicleType.scooter,
		condition: Condition.lock,
		currSpeed: 0,
		batteryLv: 0,
		vehicleStat: VehicleStat.towing,
		location: "5.125,114",
		updated_at: new Date("2019-07-02T10:00:00"),
	},
];

export const columns: TableProps<TItem>["columns"] = [
	{
		title: "",
		key: "index",
		render: (_, __, i) => i + 1,
		align: "center",
	},
	{
		title: "Vehicle ID",
		dataIndex: "vehicleId",
		key: "vehicleId",
		sorter: (a, b) => a.vehicleId.localeCompare(b.vehicleId),
		align: "center",
	},
	{
		title: "Type",
		dataIndex: "vehicleType",
		key: "vehicleType",
		sorter: (a, b) => a.vehicleType.localeCompare(b.vehicleType),
		align: "center",
	},
	{
		title: "Lock/Unlock",
		dataIndex: "condition",
		key: "condition",
		sorter: (a, b) => a.condition.localeCompare(b.condition),
	},
	{
		title: "Current Speed",
		dataIndex: "currSpeed",
		key: "currSpeed",
		render: (text: string) => <p>{text} km/h</p>,
		sorter: (a, b) => a.currSpeed - b.currSpeed,
		align: "center",
	},
	{
		title: "Battery Level",
		dataIndex: "batteryLv",
		key: "batteryLv",
		render: (text: string) => <p>{text}%</p>,
		sorter: (a, b) => a.batteryLv - b.batteryLv,
		align: "center",
	},
	{
		title: "Status",
		dataIndex: "vehicleStat",
		key: "vehicleStat",
		sorter: (a, b) => a.vehicleStat.localeCompare(b.vehicleStat),
		align: "center",
	},
	{
		title: "Location",
		dataIndex: "location",
		key: "location",
		sorter: (a, b) => a.location.localeCompare(b.location),
		align: "center",
	},
	{
		title: "Last Updated",
		dataIndex: "updated_at",
		key: "updated_at",
		render: (date: Date) => new Date(date).toLocaleString(),
		sorter: (a, b) =>
			new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime(),
		align: "center",
	},
];

// class TableCol<T> {
// 	title: string;
// 	key: string;
// 	dataIndex?: string;
// 	render?: (text: T) => JSX.Element;
// 	sorter?: (a: T, b: T) => number;
// 	align?: string;
// 	constructor(
// 		title: string,
// 		key: string,
// 		optional: {
// 			dataIndex?: string;
// 			render?: (text: T) => JSX.Element;
// 			sorter?: (a: T, b: T) => number;
// 			align?: string;
// 		}
// 	) {
// 		this.title = title;
// 		this.key = key;
// 		this.dataIndex = optional.dataIndex;
// 		this.render = optional.render;
// 		this.sorter = optional.sorter;
// 		this.align = optional.align;
// 	}
// }
