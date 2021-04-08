import "@epo/css-framework/lib/index.min.css";
import { Button } from "@epo/epods-react-components-alpha";
import { MenuItem, Select } from "@material-ui/core";
import "./App.css";

function App() {
    return (
        <div>
            <header>
                <Select
                    labelId="select-outlined-label"
                    id="select-outlined"
                    displayEmpty
                >
                    <MenuItem>
                        <b>Select value</b>
                    </MenuItem>
                    {["Value A", "Value B", "Value C", "Value D"].map(
                        (value, i) => {
                            return <MenuItem value={value}>{value}</MenuItem>;
                        }
                    )}
                </Select>
                <Button className="assign-button">
                    EPO library test button
                </Button>
            </header>
        </div>
    );
}

export default App;
