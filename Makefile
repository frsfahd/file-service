.PHONY: proto-go-gen proto-js-gen grpcui start-ui build-ui start-server start-web

proto-go-gen:
	protoc \
	--proto_path=. *.proto \
	--go_out=./server \
	--go-grpc_out=./server

proto-js-gen:
	# protoc \
    # --proto_path=proto \
	# --plugin=protoc-gen-js=`which protoc-gen-js` \
    # --js_out=import_style=es6,binary:./web \
    # --grpc_out=grpc_js:./web \
    # ./proto/*

	grpc_tools_node_protoc \
	--proto_path=. *.proto \
	--js_out=import_style=commonjs,binary:./web/ \
	--grpc_out=grpc_js:./web/ \
	

grpcui:
	grpcui -plaintext -proto *.proto localhost:9000

build-ui:
	cd web/ui && npm run build

start-ui:
	cd web/ui && npm run dev

start-server:
	cd server/ && go run .

start-web:
	cd web/ && npm run start