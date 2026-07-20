import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, User, ArrowRight, Sparkles, Loader2 } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { BLOGS, BLOG_CONTENTS, getPostTabs, getStaticCategories } from "@/data/blogs";


const TABS = [
  { id: "All", label: "All Post" },
  { id: "other", label: "Other" },
  { id: "MCA CET", label: "MCA CET" },
  { id: "MBA CET", label: "MBA CET" },
  { id: "IPMAT", label: "IPMAT" },
  { id: "CRT", label: "CRT" },
  { id: "CET", label: "CET" },
  { id: "SET", label: "SET" },
  { id: "CAT", label: "CAT" },
  { id: "GDPI", label: "GDPI" }
];

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // Load static blogs immediately as local baseline data only
    const initialPosts = BLOGS.map(b => ({
      ...b,
      isStatic: true,
      categories: getStaticCategories(b.title),
      tabs: getPostTabs(getStaticCategories(b.title))
    }));
    setPosts(initialPosts);
    setLoading(false);
  }, []);

  const processedPosts = posts.map(post => {
    if (post.isStatic) return post;

    const tabs = getPostTabs(post.categories || []);
    const categoryText = tabs.map(t => t === "other" ? "Other" : t).join(" / ");
    const rawExcerpt = post.excerpt?.rendered || "";
    const cleanExcerpt = rawExcerpt
      .replace(/<\/?[^>]+(>|$)/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&#8217;/g, "'")
      .replace(/&#8211;/g, "-")
      .trim();
    const shortExcerpt = cleanExcerpt.length > 150 ? cleanExcerpt.substring(0, 150) + "..." : cleanExcerpt;

    const formattedDate = post.date 
      ? new Date(post.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric"
        })
      : "June 2026";

    return {
      id: post.id,
      title: post.title?.rendered || "",
      excerpt: shortExcerpt,
      date: formattedDate,
      author: "KATexpert Research",
      category: categoryText,
      tabs: tabs,
      readTime: "5 min read",
      url: post.link,
      img: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/assets/blogs/2026/07/KAT-Experts-1-1.jpeg",
      content: post.content
    };
  });

  const filteredPosts = selectedTab === "All"
    ? processedPosts
    : processedPosts.filter(p => {
        if (selectedTab === "SET") {
          // Only show the two specific SET blogs
          return p.tabs?.includes("SET") && (
            p.title.includes("Top Law Coaching") || 
            p.title.includes("Best Coaching Classes in Nagpur for CAT, SET") ||
            p.id === 12511 ||
            p.id === 12017 ||
            p.id === "blog-post-9" ||
            p.id === "blog-post-11"
          );
        }
        return p.tabs?.includes(selectedTab);
      });

  const showFeatured = selectedTab === "All" && filteredPosts.length > 0;
  const featuredPost = showFeatured ? filteredPosts[0] : null;
  const gridPosts = showFeatured ? filteredPosts.slice(1) : filteredPosts;

  const visibleGridPosts = gridPosts.slice(0, visibleCount);
  const hasMore = gridPosts.length > visibleCount;

  return (
    <main className="bg-slate-50/50 min-h-screen pb-20 font-sans text-slate-800">
      <PageHero title="Blogs & Articles" breadcrumb={["Student Resources", "Blogs"]} />

      <div className="container-x max-w-6xl mx-auto mt-12 px-4">
        {/* Category Tabs Section */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" id="blog-category-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setSelectedTab(tab.id);
                setVisibleCount(8);
              }}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wider transition-colors cursor-pointer ${
                selectedTab === tab.id
                  ? "bg-[#ea580c] text-white shadow-md shadow-brand-orange/10"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {loading && posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-3">
            <Loader2 className="w-8 h-8 text-[#ea580c] animate-spin" />
            <p className="text-sm text-slate-500 font-medium">Fetching live insights...</p>
          </div>
        ) : (
          <>
            {/* Featured Banner (Only shown in 'All Post' tab) */}
            {showFeatured && featuredPost && (
              <div className="bg-[#1e293b] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden mb-12 text-left" id="blog-featured-banner">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#ea580c]/15 rounded-full blur-3xl -z-1" />
                <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
                  <div className="flex-1 space-y-4">
                    <div className="inline-flex items-center space-x-2 bg-[#ea580c]/20 border border-[#ea580c]/30 px-3 py-1 rounded-full text-xs font-bold text-[#f97316] uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-[#f97316] animate-pulse" />
                      <span>Featured Post</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-[10px] text-slate-400 font-semibold pt-2">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-[#ea580c]" />
                        {featuredPost.author}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {featuredPost.date}
                      </span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div className="pt-2">
                      <button 
                        onClick={() => setSelectedPost(featuredPost)}
                        className="inline-flex items-center justify-center gap-2 bg-[#ea580c] hover:bg-[#f97316] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md shadow-brand-orange/15 cursor-pointer"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                  {featuredPost.img && (
                    <div className="w-full lg:w-[420px] shrink-0 aspect-[16/9] rounded-2xl overflow-hidden border border-slate-700/50 shadow-lg bg-[#0f172a]">
                      <img 
                        src={featuredPost.img} 
                        alt={featuredPost.title} 
                        className="w-full h-full object-contain"
                        loading="eager"
                        fetchPriority="high"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Grid display */}
            {visibleGridPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5" id="blogs-grid">
                {visibleGridPosts.map((blog, idx) => (
                  <motion.article
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx % 4) * 0.05 }}
                    key={blog.id}
                    className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3 text-left">
                      {blog.img && (
                        <button 
                          onClick={() => setSelectedPost(blog)}
                          className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-100 cursor-pointer block text-left p-0"
                        >
                          <img 
                            src={blog.img} 
                            alt={blog.title} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </button>
                      )}
                      <div className="space-y-1.5">
                        <span className="text-[8px] font-bold text-brand-orange uppercase bg-brand-orange/10 px-2 py-0.5 rounded-full inline-block">
                          {blog.category}
                        </span>
                        <h3 className="text-xs font-bold text-brand-blue font-display hover:text-[#ea580c] transition-colors leading-snug">
                          <button 
                            onClick={() => setSelectedPost(blog)}
                            className="text-left font-bold text-brand-blue font-display hover:text-[#ea580c] transition-colors leading-snug cursor-pointer p-0 bg-transparent border-0"
                          >
                            {blog.title}
                          </button>
                        </h3>
                        <p className="text-[11px] text-gray-500 leading-relaxed font-medium line-clamp-3">
                          {blog.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-[10px] text-gray-400 font-semibold">
                      <span>{blog.date}</span>
                      <button 
                        onClick={() => setSelectedPost(blog)}
                        className="text-brand-blue hover:text-brand-orange flex items-center gap-1 font-bold cursor-pointer p-0 bg-transparent border-0"
                      >
                        Read <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center text-slate-500">
                No articles found in this category yet.
              </div>
            )}

            {/* Load More Button */}
            {hasMore && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setVisibleCount(prev => prev + 8)}
                  className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold px-8 py-3 rounded-full text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow cursor-pointer"
                >
                  Load More Articles
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Selected Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl rounded-2xl bg-white p-6 shadow-2xl flex flex-col h-[90vh]"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div className="text-left pr-4">
                  <span className="text-[9px] font-bold text-brand-orange uppercase bg-brand-orange/10 px-2.5 py-0.5 rounded-full inline-block mb-1">
                    {selectedPost.category}
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-extrabold text-navy leading-snug">
                    {selectedPost.title}
                  </h3>
                  <div className="flex items-center gap-3 text-[10px] text-slate-500 font-semibold mt-1">
                    <span>{selectedPost.date}</span>
                    <span>•</span>
                    <span>{selectedPost.readTime || "5 min read"}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="rounded-full bg-slate-100 hover:bg-slate-200 p-2 text-slate-500 hover:text-slate-700 transition-colors cursor-pointer font-bold text-xs shrink-0"
                >
                  ✕
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto pr-1 scrollbar-thin text-left">
                <div className="max-w-3xl mx-auto">
                  {selectedPost.img && (
                    <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 border border-slate-100 shadow-sm bg-slate-50">
                      <img 
                        src={selectedPost.img} 
                        alt={selectedPost.title} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  
                  {selectedPost.content?.rendered ? (
                    <div 
                      className="wp-blog-content"
                      dangerouslySetInnerHTML={{ __html: selectedPost.content.rendered }}
                    />
                  ) : (
                    <div className="space-y-1">
                      {(() => {
                        const postContent = BLOG_CONTENTS[selectedPost.id];
                        if (!postContent) {
                          return <p className="text-sm text-slate-500 italic">Content loading...</p>;
                        }
                        
                        const renderedElements = [];
                        let listItems = [];
                        
                        const flushList = (key) => {
                          if (listItems.length > 0) {
                            renderedElements.push(
                              <ul key={`list-${key}`} className="list-disc pl-5 space-y-1.5 my-4 text-slate-750 text-sm leading-relaxed font-medium">
                                {listItems.map((item, idx) => (
                                  <li key={`li-${key}-${idx}`}>{item}</li>
                                ))}
                              </ul>
                            );
                            listItems = [];
                          }
                        };
                        
                        postContent.forEach((element, idx) => {
                          if (element.type === "list-item") {
                            listItems.push(element.text);
                          } else {
                            flushList(idx);
                            if (element.type === "heading") {
                              renderedElements.push(
                                <h3 key={idx} className="font-display text-lg sm:text-xl font-bold text-navy mt-6 mb-3">
                                  {element.text}
                                </h3>
                              );
                            } else if (element.type === "paragraph") {
                              renderedElements.push(
                                <p key={idx} className="text-sm sm:text-base text-slate-650 leading-relaxed font-medium mb-4">
                                  {element.text}
                                </p>
                              );
                            }
                          }
                        });
                        
                        flushList(postContent.length);
                        return renderedElements;
                      })()}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
