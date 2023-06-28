import { db } from "@/commons/libraries/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { FieldValues, useForm } from "react-hook-form";

export default function BoardNew() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onClickSubmit = async (data: FieldValues) => {
    try {
      await addDoc(collection(db, "board"), {
        ...data,
      });
      alert("게시글이 등록되었습니다.");
      router.push("/boards");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onClickSubmit)}
      style={{
        margin: "100px",
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      <div style={{ padding: "10px" }}>
        제목 :{" "}
        <input
          {...register("title")}
          placeholder="제목을 입력해주세요."
          type="text"
          style={{ padding: "5px", width: "500px" }}
        />
      </div>
      <div style={{ padding: "10px" }}>
        내용 :{" "}
        <input
          {...register("contents")}
          placeholder="내용을 입력해주세요."
          type="text"
          style={{ padding: "5px", width: "500px" }}
        />
      </div>
      <div style={{ padding: "10px" }}>
        작성자 :{" "}
        <input
          {...register("writer")}
          placeholder="작성자를 입력해주세요."
          type="text"
          style={{ padding: "5px", width: "500px" }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={{ padding: "10px", margin: "10px", cursor: "pointer" }}>
          등록하기
        </button>
      </div>
    </form>
  );
}
