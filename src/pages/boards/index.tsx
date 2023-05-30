import { db } from "@/commons/libraries/firebase";
import { DocumentData, collection, getDoc, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function BoardList() {
  const [dataBoards, setDataBoards] = useState<DocumentData[]>([]);
  const [boardId, setBoardId] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBoards = async () => {
      const board = await getDocs(collection(db, "board"));
      const boards = board.docs.map((el) => el.data());
      const boardId = board.docs.map((el) => el.id);

      setDataBoards(boards);
      setBoardId(boardId);
    };

    fetchBoards();
  }, []);

  const onClickNew = () => {
    router.push("/boards/new");
  };

  const onClickDetail = (boardId: string) => () => {
    router.push(`/boards/${boardId}`);
  };

  return (
    <div style={{ margin: "100px" }}>
      <div
        style={{
          display: "flex",
          width: "800px",
          justifyContent: "space-around",
          borderTop: "1px solid gray",
          borderBottom: "1px solid gray",
          padding: "15px",
          fontWeight: "bold",
        }}
      >
        <div style={{ width: "25%", textAlign: "center" }}>번호</div>
        <div style={{ width: "25%", textAlign: "center" }}>제목</div>
        <div style={{ width: "25%", textAlign: "center" }}>내용</div>
        <div style={{ width: "25%", textAlign: "center" }}>작성자</div>
      </div>

      {dataBoards.map((el, index) => (
        <div
          key={uuidv4()}
          style={{
            display: "flex",
            width: "800px",
            justifyContent: "space-around",
            borderBottom: "1px solid gray",
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={onClickDetail(boardId[index])}
        >
          <div style={{ width: "25%", textAlign: "center" }}>{index + 1}</div>
          <div style={{ width: "25%", textAlign: "center" }}>{el.title}</div>
          <div style={{ width: "25%", textAlign: "center" }}>{el.contents}</div>
          <div style={{ width: "25%", textAlign: "center" }}>{el.writer}</div>
        </div>
      ))}
      <button
        style={{ padding: "10px", margin: "10px", cursor: "pointer" }}
        onClick={onClickNew}
      >
        작성하기
      </button>
    </div>
  );
}
