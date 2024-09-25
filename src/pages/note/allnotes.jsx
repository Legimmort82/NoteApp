import Layout from "@/components/Layouts/Layout";
import trashImg from "@/assets/icons/note-card-icons/trash.svg";
import notFavoriteImg from "@/assets/icons/note-card-icons/not-favorite.svg";
import favoriteImg from "@/assets/icons/note-card-icons/favorite.svg";
import editImg from "@/assets/icons/note-card-icons/edit.svg";
import NoteCard from "@/components/ui/Cards/NoteCard";
import truncateText from "@/hooks/truncateText";
import Loading from "@/components/ui/Loading/Loading";
import useGetAllNotes from "@/api/Notes/getAllNotes";
import useUpdateNote from "@/api/Notes/updateNote";
import Error from "@/components/ui/Error/Error";

function AllNotes() {
  const { isLoading, data, isError, error, refetch } = useGetAllNotes();
  const mutation = useUpdateNote();
  const notesFilter = data?.data.filter((note) => note.isTrash === false);

  const ChangeTrashStatus = (id) => {
    const singleNote = notesFilter.find((note) => note.id === id);
    const note = { ...singleNote, isTrash: true };
    mutation.mutate(
      { data: note, id },
      {
        onSuccess: (res) => {
          console.log(res);
          refetch();
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };

  const ChangeFavoriteToTrue = (id) => {
    console.log(typeof id);
    const singleNote = notesFilter.find((note) => note.id === id);
    if (singleNote.isFavorite === false) {
      const note = { ...singleNote, isFavorite: true };
      mutation.mutate(
        { data: note, id },
        {
          onSuccess: (res) => {
            console.log(res);
            refetch();
          },
          onError: (err) => {
            console.log(err);
          },
        }
      );
    } else {
      const note = { ...singleNote, isFavorite: false };
      mutation.mutate(
        { data: note, id },
        {
          onSuccess: (res) => {
            console.log(res);
            refetch();
          },
          onError: (err) => {
            console.log(err);
          },
        }
      );
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return (
      <Error>
        {error.message}
      </Error>
    )
  }

  return (
    <>
      <Layout>
        <div className="bg-Primary-100 dark:bg-dark-300 h-screen relative overflow-x-clip overflow-y-auto duration-1000">
          <div className="bg-Primary-700 dark:bg-dark-100 w-[120px] h-[120px] rounded-[50%] absolute top-[-60px] right-[-60px] dark:shadow-none shadow-md shadow-gray-400 " />

          <div className="flex flex-col items-center md:items-start  md:pl-[96px] md:pr-10">
            <h1 className="py-7 text-Primary-500 text-[55px] font-bold md:self-start">
              Allnotes
            </h1>

            <div className="flex flex-col md:flex-row md:flex-wrap gap-9 pb-10">
              {notesFilter?.map((item) => {
                const truncatedDesc = truncateText(item.description, 25);
                const truncatedTitle = truncateText(item.title, 12);

                return (
                  <NoteCard
                    key={item.id}
                    id={item.id}
                    title={truncatedTitle}
                    date={item.date}
                    description={truncatedDesc}
                    img1={editImg}
                    img2={item.isFavorite ? favoriteImg : notFavoriteImg}
                    img3={trashImg}
                    color={item.color}
                    onClick1={() => ChangeFavoriteToTrue(item.id)}
                    onClick2={() => ChangeTrashStatus(item.id)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default AllNotes;
