import { Button, Table } from "antd";
import "./App.css";
import { columns, data } from "./libs/data";

function App() {
	return (
		<>
			<div>
				<p className="mb-8 text-xl font-semibold">
					Hanantyo React Practical Assignment
				</p>
				<div className="flex flex-col gap-2 w-[55rem] mx-auto bg-slate-100">
					<p className="p-2 bg-[#7adeae] font-semibold text-gray-700 text-lg">
						Vehicle Management
					</p>
					<Button className="w-[15%] ml-auto mr-[1rem] bg-[#7adeae] border-0 rounded-2xl">
						+ new vehicle
					</Button>
					<Table
						className="custom-table bg-black"
						columns={columns}
						dataSource={data}
						pagination={false}
						size="small"
					/>
				</div>
			</div>
		</>
	);
}

export default App;
