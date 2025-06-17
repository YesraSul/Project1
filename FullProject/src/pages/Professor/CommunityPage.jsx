import React, { useState, useEffect } from "react";
import { Heart, MessageCircle, Trash2, Edit } from "lucide-react";
import "../../assets/css/CommunityPage.css";

const mockCommunities = [
  { id: 1, name: "مجتمع المواد", type: "عام", category: "قسم المواد" },
  { id: 2, name: "مشاريع ", type: "خاص", category: "قسم المشاريع" },
  { id: 3, name: "مجتمع الاختصاصات", type: "عام", category: "قسم الاختصاصات" }, // ← تمت إضافته
];

const categories = ["كل الأقسام", "قسم المواد", "قسم الاختصاصات", "قسم المشاريع"];

const CommunityPage = () => {
  const [communities, setCommunities] = useState([]);
  const [filter, setFilter] = useState("كل الأقسام");
  const [newCommunity, setNewCommunity] = useState({ name: "", type: "عام", password: "", category: "قسم المواد" });
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [showCreate, setShowCreate] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    setCommunities(mockCommunities);
  }, []);

  const handleCreateOrUpdateCommunity = () => {
    if (!newCommunity.name) return;

    if (editId) {
      setCommunities(communities.map(com => com.id === editId ? { ...newCommunity, id: editId } : com));
      setEditId(null);
    } else {
      const newCom = { ...newCommunity, id: Date.now() };
      setCommunities([...communities, newCom]);
    }

    setNewCommunity({ name: "", type: "عام", password: "", category: "قسم المواد" });
    setShowCreate(false);
  };

  const handleDelete = (id) => {
    setCommunities(communities.filter(com => com.id !== id));
    if (selectedCommunity?.id === id) setSelectedCommunity(null);
  };

  const handleEdit = (community) => {
    setNewCommunity({ name: community.name, type: community.type, password: community.password || "", category: community.category });
    setEditId(community.id);
    setShowCreate(true);
  };

  const filteredCommunities = communities.filter(
    (com) => filter === "كل الأقسام" || com.category === filter
  );

  return (
    <div className="flex">
      <aside className="sidebar p-4 bg-orange-100 min-h-screen w-64">
        <h2 className="text-lg font-bold mb-4">الأقسام</h2>
        {categories.map((cat) => (
          <div
            key={cat}
            className={`cursor-pointer p-2 rounded hover:bg-orange-200 ${filter === cat ? "bg-orange-300" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </div>
        ))}
      </aside>

      <main className="flex-1 p-6 space-y-6 bg-orange-50 min-h-screen community-page">
        <h1 className="text-3xl font-bold text-orange-600 mb-4 community-title">مجتمع الأساتذة</h1>

        <div className="mt-4 flex gap-4 flex-wrap">
          {filteredCommunities.map((community) => (
            <div key={community.id} className="relative">
              <button
                onClick={() => setSelectedCommunity(community)}
                className="community-card"
              >
                {community.name}
              </button>
              <div className="absolute top-0 right-0 flex gap-1">
                <button onClick={() => handleEdit(community)} className="text-blue-600"><Edit size={16} /></button>
                <button onClick={() => handleDelete(community.id)} className="text-red-600"><Trash2 size={16} /></button>
              </div>
            </div>
          ))}
          <button
            onClick={() => setShowCreate(true)}
            className="create-button"
          >
            + إنشاء مجتمع جديد
          </button>
        </div>

        {showCreate && (
          <div className="mt-6 space-y-4 create-form">
            <h2 className="text-xl font-semibold text-orange-600">{editId ? "تعديل المجتمع" : "إنشاء مجتمع جديد"}</h2>
            <input
              className="styled-input"
              placeholder="اسم المجتمع"
              value={newCommunity.name}
              onChange={(e) => setNewCommunity({ ...newCommunity, name: e.target.value })}
            />
            <select
              className="styled-input"
              value={newCommunity.type}
              onChange={(e) => setNewCommunity({ ...newCommunity, type: e.target.value })}
            >
              <option value="عام">عام</option>
              <option value="خاص">خاص</option>
            </select>
            {newCommunity.type === "خاص" && (
              <input
                type="password"
                className="styled-input"
                placeholder="كلمة السر"
                value={newCommunity.password}
                onChange={(e) => setNewCommunity({ ...newCommunity, password: e.target.value })}
              />
            )}
            <select
              className="styled-input"
              value={newCommunity.category}
              onChange={(e) => setNewCommunity({ ...newCommunity, category: e.target.value })}
            >
              {categories.slice(1).map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <button onClick={handleCreateOrUpdateCommunity} className="send-button">
              {editId ? "تحديث" : "إنشاء"}
            </button>
          </div>
        )}

        {selectedCommunity && <CommunityDetail community={selectedCommunity} />}
      </main>
    </div>
  );
};

const CommunityDetail = ({ community }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: "مرحباً بكم في المجتمع",
      comments: ["شكراً لك!"],
      likes: 2,
    },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleComment = (postId) => {
    if (!newComment.trim()) return;
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId ? { ...p, comments: [...p.comments, newComment] } : p
      )
    );
    setNewComment("");
  };

  const handleLike = (postId) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, likes: p.likes + 1 } : p))
    );
  };

  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-2xl text-orange-700 font-semibold">{community.name}</h2>
      {posts.map((post) => (
        <div key={post.id} className="community-post">
          <p className="mb-2 text-lg">{post.content}</p>
          <div className="flex items-center gap-4 text-orange-500">
            <button onClick={() => handleLike(post.id)} className="flex items-center gap-1">
              <Heart className="w-5 h-5" /> {post.likes}
            </button>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-5 h-5" /> {post.comments.length} تعليق
            </div>
          </div>
          <div className="mt-2 space-y-1">
            {post.comments.map((cmt, idx) => (
              <div key={idx} className="comment-box">
                {cmt}
              </div>
            ))}
            <div className="flex gap-2 mt-2">
              <input
                className="styled-input"
                placeholder="اكتب تعليقك..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button
                onClick={() => handleComment(post.id)}
                className="send-button"
              >
                إرسال
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityPage;