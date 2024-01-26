import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Dehazeicon from "@mui/icons-material/Dehaze";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import bcco from "@/assets/images/bcco.png";
type Anchor = "right";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ "& .MuiDrawer-paper": { width: 240, backgroundColor: "white" } }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="w-[90%] sm:w-[700px]  ">
          <div className="bg-white">
            <div className="flex justify-between">
              <Image className="w-40" src={bcco} alt="" />
              <div className="flex justify-end py-2">
                <CloseIcon style={{ fontSize: "6rem", color: "#C7B2A2" }} />
              </div>
            </div>
            <ul className="text-[24px] py-10 m-5 flex flex-col gap-8">
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Services</li>
              <li>For Designers</li>
              <li>Tools</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>

            <div className="border border-black bg-black text-white w-48 px-4 py-1 m-2 rounded-full text-[16px]">
              <button>Shop Templates</button>
              <ShoppingCartIcon />{" "}
            </div>
          </div>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Dehazeicon />
          </Button>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
