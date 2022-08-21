import { useState } from "react";
import { TagsInput } from "react-tag-input-component";

export default function BlogAdd() {

    const [selected, setSelected] = useState(["papaya"]);

    const imageUploadUrl = process.env.REACT_APP_API_URL + "site/panel/users/" + "id" + "/uploads";

    return (
        <>
            <TagsInput
                value={selected}
                onChange={setSelected}
                name="fruits"
                placeHolder="enter fruits"
            />
        </>
    )

}