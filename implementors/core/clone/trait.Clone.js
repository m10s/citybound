(function() {var implementors = {};
implementors["chunked"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='chunked/struct.MemChunker.html' title='chunked::MemChunker'>MemChunker</a>",];
implementors["compact"] = ["impl&lt;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, A:&nbsp;<a class='trait' href='allocators/trait.Allocator.html' title='allocators::Allocator'>Allocator</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='compact/struct.CVec.html' title='compact::CVec'>CompactVec</a>&lt;T, A&gt;","impl&lt;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>, A:&nbsp;<a class='trait' href='allocators/trait.Allocator.html' title='allocators::Allocator'>Allocator</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='compact/struct.CVec.html' title='compact::CVec'>CompactVec</a>&lt;T, A&gt;","impl&lt;K:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>, V:&nbsp;<a class='trait' href='compact/trait.Compact.html' title='compact::Compact'>Compact</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, A:&nbsp;<a class='trait' href='allocators/trait.Allocator.html' title='allocators::Allocator'>Allocator</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='compact/struct.CDict.html' title='compact::CDict'>CompactDict</a>&lt;K, V, A&gt;",];
implementors["kay"] = ["impl&lt;M:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='kay/trait.Message.html' title='kay::Message'>Message</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='kay/swarm/struct.RequestConfirmation.html' title='kay::swarm::RequestConfirmation'>RequestConfirmation</a>&lt;M&gt;","impl&lt;M:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='kay/trait.Message.html' title='kay::Message'>Message</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='kay/swarm/struct.Confirmation.html' title='kay::swarm::Confirmation'>Confirmation</a>&lt;M&gt;","impl&lt;M:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='kay/trait.Message.html' title='kay::Message'>Message</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='kay/swarm/struct.ToRandom.html' title='kay::swarm::ToRandom'>ToRandom</a>&lt;M&gt;","impl&lt;SA:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='kay/swarm/trait.SubActor.html' title='kay::swarm::SubActor'>SubActor</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='kay/swarm/struct.Create.html' title='kay::swarm::Create'>Create</a>&lt;SA&gt;","impl&lt;SA:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='kay/swarm/trait.SubActor.html' title='kay::swarm::SubActor'>SubActor</a>, M:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='kay/trait.Message.html' title='kay::Message'>Message</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='kay/swarm/struct.CreateWith.html' title='kay::swarm::CreateWith'>CreateWith</a>&lt;SA, M&gt;","impl&lt;M:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='kay/trait.Message.html' title='kay::Message'>Message</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='kay/struct.Packet.html' title='kay::Packet'>Packet</a>&lt;M&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='kay/struct.ID.html' title='kay::ID'>ID</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()