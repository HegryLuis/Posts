import React from "react";
import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/Select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={(e) =>
                    setFilter({ ...filter, query: e.target.value })
                }
                placeholder="Поиск..."
            ></MyInput>
            <MySelect
                value={filter.sort}
                onChange={(selectedSort) => {
                    setFilter({ ...filter, sort: selectedSort });
                }}
                options={[
                    { value: "title", name: "По названию" },
                    { value: "description", name: "По описанию" },
                ]}
            />
        </div>
    );
};

export default PostFilter;
