import { db } from "@/commons/libraries/firebase";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function BoardDetail() {
  const [dataBoard, setDataBoard] = useState<DocumentData | undefined>();
  const router = useRouter();
  useEffect(() => {
    const fetchBoard = async () => {
      const board = doc(db, "board", String(router.query.boardId));
      const getBoard = (await getDoc(board)).data();
      setDataBoard(getBoard);
    };

    fetchBoard();
  }, [router.query.boardId]);

  const onClickList = () => {
    router.push("/boards");
  };

  return (
    <div style={{ margin: "100px", border: "1px solid gray", padding: "20px" }}>
      <div style={{ marginBottom: "10px" }}>작성자 : {dataBoard?.writer}</div>
      <div
        style={{
          fontSize: "25px",
          borderBottom: "1px solid gray",
          marginBottom: "20px",
        }}
      >
        제목 : {dataBoard?.title}
      </div>
      <div style={{ marginBottom: "30px" }}>{dataBoard?.contents}</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={onClickList}
          style={{ padding: "10px", cursor: "pointer" }}
        >
          목록으로
        </button>
      </div>
    </div>
  );
}
